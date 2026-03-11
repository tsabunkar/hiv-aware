variable "aws_region" {
  description = "AWS region for the S3 bucket."
  type        = string
  default     = ""
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for the site."
  type        = string
  default     = ""
}

variable "project_name" {
  description = "Project name used for tagging."
  type        = string
  default     = "hiv-info-app"
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

variable "jenkins_instance_type" {
  description = "EC2 instance type for Jenkins."
  type        = string
  default     = "t3.small"
}

variable "jenkins_root_volume_gb" {
  description = "Root EBS volume size for Jenkins instance."
  type        = number
  default     = 15
}

variable "jenkins_swap_gb" {
  description = "Swap size in GB for Jenkins instance."
  type        = number
  default     = 2
}

variable "jenkins_job_name" {
  description = "Seed Jenkins job name for the pipeline."
  type        = string
  default     = "hiv-info-app-pipeline"
}

variable "jenkins_key_name" {
  description = "EC2 key pair name for SSH access to Jenkins instance."
  type        = string
  default     = ""
}

variable "jenkins_allowed_cidrs" {
  description = "CIDR blocks allowed to access Jenkins (port 8080)."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "ssh_allowed_cidrs" {
  description = "CIDR blocks allowed to access SSH (port 22)."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "git_repo_url" {
  description = "Git repository URL for the project (HTTPS or SSH)."
  type        = string
  default     = "https://github.com/yourusername/hiv-info-app.git"
}

variable "git_branch" {
  description = "Git branch to checkout and build."
  type        = string
  default     = "main"
}
