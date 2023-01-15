pipeline{

agent any
stages{
    stage("Build"){

        steps{

            script{

                sh 'npm install'
                sh 'npm run build'
                
        }
    }
    stage("Docker Build and Push"){

        steps{

            script{

                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                sh 'docker build -t vraj0073/my_first_job:Sell_it_MarketPlace .'   
                sh 'echo $pass |docker login --username $user --password-stdin' 
                sh 'docker push vraj0073/my_first_job:Sell_it_MarketPlace'
                
}
                
            }
        }
    }

stage("Pipeline Build"){

        steps{

            script{

               build job: 'ReleaseJob'
}
                
            }
        }
    }    }
    }
