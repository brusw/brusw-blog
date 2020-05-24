def projects = ["koa", "nuxt", "admin"]

pipeline {
    agent any

    stages {
        stage ("Build") {
            steps {
                script {
                    for (proj in projects) {
                        sh "docker build -t brusw/blog-${proj}:latest src/${proj}"
                    }
                }
            }
        }
        stage ("Release") {
            steps {
                script {
                    def registryAuth = "cc27921d-ae66-4b81-b33d-185eb27f3963"

                    withCredentials ([usernamePassword(credentialsId: "${registryAuth}", passwordVariable: "password", usernameVariable: "username")]) {                           
                        sh "docker login -u ${username} -p ${password}"
                    }

                    for (proj in projects) {
                        sh "docker push brusw/blog-${proj}:latest"
                    }
                }
            }
        }
        stage ("Deploy") {
            steps {
                sh "docker stack deploy -c docker-stack.yml brusw_blog"
            }
        }
    }

    post {
        success {
            sh "docker stack services brusw_blog"
        }
    }
}
