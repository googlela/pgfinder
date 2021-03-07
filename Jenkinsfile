pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "cd react"
                sh "sudo npm install"
                sh "sudo npm run build"
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