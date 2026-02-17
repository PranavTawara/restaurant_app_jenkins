pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/PranavTawara/restaurant_app_jenkins.git'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh 'docker-compose down || true'
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Start Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Show Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
