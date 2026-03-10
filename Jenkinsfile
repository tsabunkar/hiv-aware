pipeline {
  agent any

  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '5'))
    disableConcurrentBuilds()
  }

  environment {
    AWS_REGION = "${env.AWS_DEFAULT_REGION}"
    S3_BUCKET = "${env.S3_BUCKET}"
    CF_DIST_ID = "${env.CLOUDFRONT_DISTRIBUTION_ID}"
    DIST_FOLDER = "dist/hiv-info-app"
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Checking out code from Git repository...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'Installing Node.js dependencies...'
        sh 'npm ci'
      }
    }

    stage('Build Angular App') {
      steps {
        echo 'Building Angular application for production...'
        sh 'npm run build -- --configuration production'
      }
    }

    stage('Deploy to S3') {
      steps {
        script {
          echo "Deploying to S3 bucket: ${S3_BUCKET}..."
          def syncResult = sh(
            script: """
              aws s3 sync ${DIST_FOLDER} s3://${S3_BUCKET} \
                --delete \
                --region ${AWS_REGION} \
                --only-show-errors
            """,
            returnStatus: true
          )

          if (syncResult != 0) {
            error("S3 deployment failed!")
          }
          echo "Successfully deployed to S3!"
        }
      }
    }

    stage('Invalidate CloudFront') {
      steps {
        script {
          echo 'Invalidating CloudFront cache...'
          sh """
            aws cloudfront create-invalidation \
              --distribution-id ${CF_DIST_ID} \
              --paths "/*" \
              --region ${AWS_REGION}
          """
          echo 'CloudFront cache invalidated!'
        }
      }
    }
  }

  post {
    success {
      echo 'Deployment completed successfully!'
    }
    failure {
      echo 'Deployment failed. Check logs for details.'
    }
    always {
      echo 'Cleaning up workspace...'
      cleanWs()
    }
  }
}
