#!/bin/bash
set -euxo pipefail

# ============================================================================
# Jenkins Bootstrap Script
# ============================================================================
# This script installs and configures Jenkins with:
# - Java 17, Node.js 20, Git, AWS CLI v2
# - Jenkins with required plugins (Git, Pipeline, AWS Steps)
# - Automatic pipeline job creation from Git repo
# - IAM role-based AWS credentials
# ============================================================================

# ============================================================================
# System Updates & Package Installation
# ============================================================================

dnf -y update

# Install Java 17 (required for Jenkins)
dnf -y install java-17-amazon-corretto wget git unzip

# Install Node.js 20 (required for Angular build)
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf -y install nodejs

# Install AWS CLI v2
cd /tmp
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
./aws/install
rm -rf awscliv2.zip aws

# ============================================================================
# Jenkins Installation
# ============================================================================

# Add Jenkins repository
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

# Install Jenkins
dnf -y install jenkins

# ============================================================================
# Swap Configuration (for low-memory instances)
# ============================================================================

if [ "${jenkins_swap_gb}" -gt 0 ]; then
  fallocate -l ${jenkins_swap_gb}G /swapfile || dd if=/dev/zero of=/swapfile bs=1M count=$(( ${jenkins_swap_gb} * 1024 ))
  chmod 600 /swapfile
  mkswap /swapfile
  swapon /swapfile
  echo '/swapfile swap swap defaults 0 0' >> /etc/fstab
fi

# ============================================================================
# Jenkins Configuration Directory Setup
# ============================================================================

JENKINS_HOME="/var/lib/jenkins"
mkdir -p $JENKINS_HOME/init.groovy.d

# ============================================================================
# Init Script 1: Skip Setup Wizard
# ============================================================================

cat > $JENKINS_HOME/init.groovy.d/01-skip-setup-wizard.groovy <<'GROOVY_EOF'
import jenkins.model.*
import jenkins.install.*

def instance = Jenkins.getInstance()
instance.setInstallState(InstallState.INITIAL_SETUP_COMPLETED)
instance.save()
GROOVY_EOF

# ============================================================================
# Init Script 2: Install Required Plugins
# ============================================================================

cat > $JENKINS_HOME/init.groovy.d/02-install-plugins.groovy <<'GROOVY_EOF'
import jenkins.model.*
import hudson.model.*
import hudson.PluginWrapper

def plugins = [
  'git',
  'workflow-aggregator',
  'pipeline-stage-view',
  'cloudbees-folder',
  'credentials-binding',
  'aws-credentials',
  'pipeline-aws'
]

def instance = Jenkins.getInstance()
def pluginManager = instance.getPluginManager()
def updateCenter = instance.getUpdateCenter()

println "Checking for required plugins..."
plugins.each { pluginName ->
  if (!pluginManager.getPlugin(pluginName)) {
    println "Installing plugin: $pluginName"
    def plugin = updateCenter.getPlugin(pluginName)
    if (plugin) {
      plugin.deploy(true)
    }
  } else {
    println "Plugin already installed: $pluginName"
  }
}

instance.save()
GROOVY_EOF

# ============================================================================
# Init Script 3: Create Pipeline Job from Git
# ============================================================================

cat > $JENKINS_HOME/init.groovy.d/03-create-pipeline.groovy <<'GROOVY_EOF'
import jenkins.model.*
import hudson.model.*
import org.jenkinsci.plugins.workflow.job.WorkflowJob
import org.jenkinsci.plugins.workflow.cps.CpsScmFlowDefinition
import hudson.plugins.git.GitSCM
import hudson.plugins.git.BranchSpec

def instance = Jenkins.instance
def jobName = "${jenkins_job_name}"
def gitRepoUrl = "${git_repo_url}"
def gitBranch = "${git_branch}"

println "Setting up pipeline job: $jobName"

if (instance.getItem(jobName) == null) {
  try {
    def job = instance.createProject(WorkflowJob, jobName)
    job.setDescription("Automated CI/CD pipeline for ${project_name}")

    // Configure Git SCM
    def scm = new GitSCM(gitRepoUrl)
    scm.branches = [new BranchSpec("*/$gitBranch")]

    // Set pipeline definition to use Jenkinsfile from SCM
    def definition = new CpsScmFlowDefinition(scm, "Jenkinsfile")
    definition.setLightweight(true)
    job.setDefinition(definition)

    job.save()
    println "Pipeline job '$jobName' created successfully"
  } catch (Exception e) {
    println "Error creating pipeline job: $${e.message}"
  }
} else {
  println "Pipeline job '$jobName' already exists"
}
GROOVY_EOF

# ============================================================================
# Init Script 4: Configure Environment Variables
# ============================================================================

cat > $JENKINS_HOME/init.groovy.d/04-configure-env.groovy <<'GROOVY_EOF'
import jenkins.model.*
import hudson.slaves.EnvironmentVariablesNodeProperty

def instance = Jenkins.getInstance()
def globalNodeProperties = instance.getGlobalNodeProperties()
def envVarsNodePropertyList = globalNodeProperties.getAll(EnvironmentVariablesNodeProperty.class)

def envVars = null
if (envVarsNodePropertyList.isEmpty()) {
  def newEnvVarsNodeProperty = new EnvironmentVariablesNodeProperty()
  globalNodeProperties.add(newEnvVarsNodeProperty)
  envVars = newEnvVarsNodeProperty.getEnvVars()
} else {
  envVars = envVarsNodePropertyList.get(0).getEnvVars()
}

// Set environment variables for the pipeline
envVars.put("AWS_DEFAULT_REGION", "${aws_region}")
envVars.put("S3_BUCKET", "${s3_bucket}")
envVars.put("CLOUDFRONT_DISTRIBUTION_ID", "${cloudfront_dist_id}")
envVars.put("PROJECT_NAME", "${project_name}")

instance.save()
println "Environment variables configured"
GROOVY_EOF

# ============================================================================
# Create .env.prod file in Jenkins home for the pipeline
# ============================================================================

cat > $JENKINS_HOME/.env.prod <<'ENV_EOF'
AWS_DEFAULT_REGION=${aws_region}
S3_BUCKET=${s3_bucket}
CLOUDFRONT_DISTRIBUTION_ID=${cloudfront_dist_id}
ENV_EOF

# ============================================================================
# Jenkins System Configuration
# ============================================================================

cat > /etc/sysconfig/jenkins <<'JENKINS_CONFIG_EOF'
JENKINS_HOME="/var/lib/jenkins"
JENKINS_JAVA_OPTIONS="-Djava.awt.headless=true -Xmx512m -Djenkins.install.runSetupWizard=false"
JENKINS_PORT="8080"
JENKINS_LISTEN_ADDRESS="0.0.0.0"
JENKINS_CONFIG_EOF

# ============================================================================
# Set Permissions
# ============================================================================

chown -R jenkins:jenkins $JENKINS_HOME

# ============================================================================
# Start Jenkins Service
# ============================================================================

systemctl daemon-reload
systemctl enable jenkins
systemctl start jenkins

# ============================================================================
# Wait for Jenkins to Start
# ============================================================================

echo "Waiting for Jenkins to start..."
timeout=300
counter=0
while [ $counter -lt $timeout ]; do
  if systemctl is-active --quiet jenkins; then
    if curl -s -o /dev/null -w "%%{http_code}" http://localhost:8080 | grep -q "200\|403"; then
      echo "Jenkins is up and running!"
      break
    fi
  fi
  sleep 5
  counter=$((counter + 5))
done

if [ $counter -ge $timeout ]; then
  echo "Jenkins failed to start within $timeout seconds"
  exit 1
fi

# ============================================================================
# Setup Automated Cleanup Cron Job
# ============================================================================

cat > /usr/local/bin/jenkins-cleanup.sh <<'CLEANUP_SCRIPT'
#!/bin/bash
# Jenkins Automated Cleanup Script
# Runs daily to prevent disk space issues

echo "$(date): Starting Jenkins cleanup..."

# Clean old build artifacts (older than 30 days)
find /var/lib/jenkins/jobs -type f -mtime +30 -delete 2>/dev/null || true

# Clean node_modules in workspaces
find /var/lib/jenkins/workspace -type d -name "node_modules" -mtime +7 -exec rm -rf {} + 2>/dev/null || true

# Clean dist folders in workspaces
find /var/lib/jenkins/workspace -type d -name "dist" -mtime +7 -exec rm -rf {} + 2>/dev/null || true

# Clean Angular cache
find /var/lib/jenkins/workspace -type d -name ".angular" -exec rm -rf {} + 2>/dev/null || true

# Clean /tmp files older than 7 days
find /tmp -type f -mtime +7 -delete 2>/dev/null || true

# Clean npm cache if it's larger than 1GB
NPM_CACHE_SIZE=$(du -sm /var/lib/jenkins/.npm 2>/dev/null | cut -f1)
if [ "$NPM_CACHE_SIZE" -gt 1024 ]; then
  npm cache clean --force 2>/dev/null || true
fi

# Clean dnf cache
dnf clean all 2>/dev/null || true

echo "$(date): Jenkins cleanup completed."
CLEANUP_SCRIPT

chmod +x /usr/local/bin/jenkins-cleanup.sh

# Add cron job to run cleanup daily at 2 AM
(crontab -l 2>/dev/null || echo "") | grep -v 'jenkins-cleanup' | { cat; echo "0 2 * * * /usr/local/bin/jenkins-cleanup.sh >> /var/log/jenkins-cleanup.log 2>&1"; } | crontab -

# ============================================================================
# Bootstrap Complete
# ============================================================================

echo "Jenkins bootstrap completed successfully!"
echo "Jenkins URL: http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4):8080"
echo "Pipeline Job: ${jenkins_job_name}"
echo "Git Repository: ${git_repo_url}"
echo "Branch: ${git_branch}"
