pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/sirajkhanfanzoo7788-star/firstciproin.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t ci-node-app .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 ci-node-app || exit 0'
            }
        }
    }
}
