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
                     buildNumber = env.BUILD_NUMBER
                }
                sh "tar -czv ui/reactive/build -f ui/reactive/react-ui-artifact-" + buildNumber + ".tar.gz"
            }
        }
        stage('Archive Artifact .tar.gz') {
            steps {
                archiveArtifacts "ui/reactive/react-ui-artifact-" + buildNumber + ".tar.gz"
            }
        }
    }
}