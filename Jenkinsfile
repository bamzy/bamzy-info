pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'False'
        HOME = '.'
        npm_config_cache = 'npm-cache'
      }
    stages {
        stage('Install React UI Dependency') {
            steps {
                sh 'cd ui/reactive && npm install'
            }
        }
        stage('Build React UI Static Artifacts') {
            steps {
                sh 'cd ui/reactive && npm run build'
            }
        }
        stage('Archive') {
          archiveArtifacts "ui/reactive/*"
        }
    }
}