def STACK_NAME = "brusw_blog"

pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
    }

    stages {
        stage ("Deliver for development") {
            when {
                branch "dev"
            }
            steps {
                sh "docker-compose up -d"
            }
            post {
                success {
                    sh "docker-compose ps"
                }
            }
        }

        stage ("Release docker image") {
            when {
                branch "master"
            }
            steps {
                script {
                    withCredentials ([usernamePassword(credentialsId: "docker-hub-credentials",
                        passwordVariable: "password", usernameVariable: "username")]) {
                        sh "docker login -u ${username} -p ${password}"
                    }

                    for (proj in ["koa", "nuxt", "admin"]) {
                        sh "docker build -t brusw/blog-${proj}:latest src/${proj}"
                        sh "docker push brusw/blog-${proj}:latest"
                    }
                }
            }
        }

        stage ("Deploy for production") {
            when {
                tag "v*"
            }
            steps {
                sh "docker stack deploy -c docker-stack.yml ${STACK_NAME}"
            }
            post {
                success {
                    sh "docker stack services ${STACK_NAME}"
                }
            }
        }
    }
}
