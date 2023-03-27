pipeline {
  agent any
  stages {
    stage('error') {
      steps {
        sleep 5
        retry(count: 2)
      }
    }

  }
}