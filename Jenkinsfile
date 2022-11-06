pipeline{

agent any
stages{

    stage("build"){

        steps{

            script{

                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                sh 'cd sellItMarketPlace'
                sh 'ls'
                cd sellItMarketPlace
    
                sh 'docker build -t vraj0073/my_first_job:v1 .'
                sh 'echo $pass |docker login --username $user --password-stdin'
                
                sh 'docker push vraj0073/my_first_job:v1'
                echo "Building the app vraj"
}
                
            }
        }
    }
    stage("Deploy"){

        steps{

            script{

                echo "Deploying the app vraj"
            }
        }
    }
    }
}