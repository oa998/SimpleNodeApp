pipeline {
    agent {
        docker {
            image 'mhart/alpine-node'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
