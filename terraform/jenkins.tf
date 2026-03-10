# ============================================================================
# Data Sources
# ============================================================================

data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_ami" "al2023" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-*-x86_64"]
  }
}

# ============================================================================
# IAM Role for Jenkins EC2 Instance
# ============================================================================

resource "aws_iam_role" "jenkins" {
  name = "${var.project_name}-jenkins-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Project = var.project_name
  }
}

resource "aws_iam_role_policy" "jenkins_s3_cloudfront" {
  name = "${var.project_name}-jenkins-policy"
  role = aws_iam_role.jenkins.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:ListBucket",
          "s3:GetBucketLocation"
        ]
        Resource = aws_s3_bucket.site.arn
      },
      {
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject"
        ]
        Resource = "${aws_s3_bucket.site.arn}/*"
      },
      {
        Effect = "Allow"
        Action = [
          "cloudfront:CreateInvalidation",
          "cloudfront:GetInvalidation",
          "cloudfront:ListInvalidations"
        ]
        Resource = aws_cloudfront_distribution.site.arn
      }
    ]
  })
}

resource "aws_iam_instance_profile" "jenkins" {
  name = "${var.project_name}-jenkins-profile"
  role = aws_iam_role.jenkins.name

  tags = {
    Project = var.project_name
  }
}

# ============================================================================
# Security Group
# ============================================================================

resource "aws_security_group" "jenkins" {
  name        = "${var.project_name}-jenkins-sg"
  description = "Allow Jenkins web and SSH"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "Jenkins UI"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = var.jenkins_allowed_cidrs
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = var.ssh_allowed_cidrs
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Project = var.project_name
  }
}

# ============================================================================
# Jenkins EC2 Instance
# ============================================================================

resource "aws_instance" "jenkins" {
  ami                         = data.aws_ami.al2023.id
  instance_type               = var.jenkins_instance_type
  subnet_id                   = data.aws_subnets.default.ids[0]
  vpc_security_group_ids      = [aws_security_group.jenkins.id]
  iam_instance_profile        = aws_iam_instance_profile.jenkins.name
  associate_public_ip_address = true
  key_name                    = var.jenkins_key_name != "" ? var.jenkins_key_name : null

  user_data = base64encode(templatefile("${path.module}/jenkins-userdata.sh", {
    jenkins_swap_gb    = var.jenkins_swap_gb
    project_name       = var.project_name
    git_repo_url       = var.git_repo_url
    git_branch         = var.git_branch
    s3_bucket          = aws_s3_bucket.site.bucket
    cloudfront_dist_id = aws_cloudfront_distribution.site.id
    aws_region         = local.aws_region_effective
  }))

  root_block_device {
    volume_size = var.jenkins_root_volume_gb
    volume_type = "gp3"
  }

  tags = {
    Name    = "${var.project_name}-jenkins"
    Project = var.project_name
  }
}
