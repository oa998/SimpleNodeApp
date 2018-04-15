stages {
    stage('Test') {
        agent {
            docker { image 'mhart/alpine-node' }
        }
        steps {
            sh 'echo hello'
        }
    }
}
