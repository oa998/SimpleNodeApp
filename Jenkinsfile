pipeline {
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'mhart/alpine-node'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
