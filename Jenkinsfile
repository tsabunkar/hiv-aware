pipeline {
  agent any

  options {
    timestamps()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Load Prod Env') {
      steps {
        script {
          def envLines = readFile('.env.prod').split('\n')
          envLines.each { line ->
            def trimmed = line.trim()
            if (!trimmed || trimmed.startsWith('#')) return
            def idx = trimmed.indexOf('=')
            if (idx <= 0) return
            def key = trimmed.substring(0, idx).trim()
            def val = trimmed.substring(idx + 1).trim()
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length() - 1)
            }
            env[key] = val
          }

          if (!env.AWS_DEFAULT_REGION?.trim()) {
            error('AWS_DEFAULT_REGION is required in .env.prod')
          }
          if (!env.S3_BUCKET?.trim()) {
            error('S3_BUCKET is required in .env.prod')
          }
        }
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build & Deploy Script') {
      steps {
        sh 'npm run deploy'
      }
    }

    stage('Deploy to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-jenkins']]) {
          sh 'aws s3 sync dist/hiv-info-app s3://$S3_BUCKET --delete --only-show-errors'
        }
      }
    }

    stage('Invalidate CloudFront') {
      when {
        expression { return env.CLOUDFRONT_DISTRIBUTION_ID?.trim() }
      }
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-jenkins']]) {
          sh 'aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"'
        }
      }
    }
  }
}
