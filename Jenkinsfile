pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Hitanshi-N-Patil/microservices-demo.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                    sh 'docker tag microservices-demo-user-service $DOCKERHUB_CREDENTIALS_USR/microservices-demo-user-service:$IMAGE_TAG'
                    sh 'docker tag microservices-demo-order-service $DOCKERHUB_CREDENTIALS_USR/microservices-demo-order-service:$IMAGE_TAG'
                    sh 'docker tag microservices-demo-frontend $DOCKERHUB_CREDENTIALS_USR/microservices-demo-frontend:$IMAGE_TAG'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/microservices-demo-user-service:$IMAGE_TAG'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/microservices-demo-order-service:$IMAGE_TAG'
                    sh 'docker push $DOCKERHUB_CREDENTIALS_USR/microservices-demo-frontend:$IMAGE_TAG'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD pipeline executed successfully!'
        }
        failure {
            echo '❌ Build failed. Check Jenkins logs for details.'
        }
    }
}
