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
                sh "docker-compose up --build -d"
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
                    docker.withRegistry("https://registry.hub.docker.com", "docker-hub-credentials") {
                        for (proj in ["koa", "nuxt", "admin"]) {
                            def image = docker.build("brusw/blog-${proj}:latest", "src/${proj}")
                            image.push()
                        }
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
