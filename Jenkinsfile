pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git branch: 'main', credentialsId: 'car-rentail-secret-github-token', url: 'https://github.com/sphamandla-s/homely-haven'
      }
    }

    stage('Docker Build Image') {
      steps {
        script {
          sh '''
          set -e  # Exit on errors
          docker build -t homely-haven ./.dockerfiles  # Replace with actual context directory
          '''
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([string(credentialsId: 'docker-hub-access-token', variable: 'DOCKER_ACCESS_TOKEN')]) {
          script {
            sh '''
            set -e  # Exit on errors
            echo $DOCKER_ACCESS_TOKEN | docker login -u sphamandla38 --password-stdin
            docker tag homely-haven sphamandla38/homely-haven:$BUILD_NUMBER  # Use build number for versioning (optional)
            docker push sphamandla38/homely-haven:$BUILD_NUMBER  # Push with version (optional)
            '''
          }
        }
      }
    }

    stage('Run Docker Container (Optional)') { 
      steps {
        script {
          sh '''
          set -e  # Exit on errors
          docker run -p 8083:8083 homely-haven
          '''
        }
      }
    }
  }
}
