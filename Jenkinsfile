pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/PranavTawara/restaurant_app_jenkins.git'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                sh '''
                    docker-compose down -v --remove-orphans || true
                    docker system prune -f || true
                '''
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
