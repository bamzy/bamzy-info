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
        stage('Export Artifact'){
            steps {
                script {
                     iacname = env.JOB_NAME
                }
                sh "tar -czv ui/reactive/build -f artifact-" + iacname
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts "ui/reactive/build/*"
            }
        }
    }
}