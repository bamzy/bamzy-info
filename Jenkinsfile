pipeline {
    agent {
        docker {
            build.inside('-w /D:/jenkins-agent/workspace/bamzy-info_main/') {
                image 'node:lts-bullseye-slim'
                args '-p 3000:3000'
            }
        }
    }
    environment {
        CI = 'False'
        HOME = '.'
        npm_config_cache = 'npm-cache'
        aws_credential = "s3-uploader"
        bucket = "bamzy-info-builds"
        region = "ca-central-1"
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
        stage("Upload To S3 Bucket"){
            steps{
                withAWS(region:"${region}", credentials:"${aws_credential}"){
                    s3Upload(file:"ui/reactive/react-ui-artifact-" + buildNumber + ".tar.gz", bucket:"${bucket}", path:"react-ui/${buildNumber}/")
                }
            }
        }
    }
}