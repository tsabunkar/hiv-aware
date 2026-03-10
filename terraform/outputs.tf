output "s3_bucket_name" {
  description = "S3 bucket hosting the site assets."
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID."
  value       = aws_cloudfront_distribution.site.id
}

output "jenkins_public_ip" {
  description = "Public IP for Jenkins EC2 instance."
  value       = aws_instance.jenkins.public_ip
}

output "jenkins_url" {
  description = "Jenkins URL (HTTP on port 8080)."
  value       = "http://${aws_instance.jenkins.public_ip}:8080"
}

output "jenkins_iam_role" {
  description = "IAM role attached to Jenkins EC2 instance."
  value       = aws_iam_role.jenkins.name
}

output "jenkins_job_name" {
  description = "Auto-created Jenkins pipeline job name."
  value       = var.jenkins_job_name
}

output "setup_instructions" {
  description = "Quick setup instructions."
  value       = <<-EOT

    ============================================================================
    Jenkins CI/CD Setup Complete!
    ============================================================================

    1. Access Jenkins:
       URL: http://${aws_instance.jenkins.public_ip}:8080

    2. Get Initial Admin Password:
       $ ssh -i <your-key>.pem ec2-user@${aws_instance.jenkins.public_ip}
       $ sudo cat /var/lib/jenkins/secrets/initialAdminPassword

    3. Pipeline Job: ${var.jenkins_job_name}
       - Automatically created and configured
       - Pulls from: ${var.git_repo_url}
       - Branch: ${var.git_branch}
       - Runs: Jenkinsfile

    4. AWS Credentials:
       - IAM Role: ${aws_iam_role.jenkins.name}
       - Automatically configured (no manual setup needed)

    5. Deployment Target:
       - S3 Bucket: ${aws_s3_bucket.site.bucket}
       - CloudFront: ${aws_cloudfront_distribution.site.domain_name}
       - CloudFront ID: ${aws_cloudfront_distribution.site.id}

    ============================================================================
  EOT
}

output "aws_region" {
  description = "AWS region where resources are deployed."
  value       = local.aws_region_effective
}
