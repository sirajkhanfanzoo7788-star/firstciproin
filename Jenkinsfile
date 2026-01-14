pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/sirajkhanfanzoo7788-star/firstciproin.git'

            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ci-node-app .'
            }
        }
    }
}
