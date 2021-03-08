pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "cd react"
                sh "npm install"
                sh "npm run build"
                sh "run-p server start"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/pgapp"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/pgapp/"
            }
        }
    }
}