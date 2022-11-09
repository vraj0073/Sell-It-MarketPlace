pipeline{

agent any
stages{

    stage("build"){

        steps{

            script{

                withCredentials([usernamePassword(credentialsId: 'docker-hub', passwordVariable: 'pass', usernameVariable: 'user')]) {
                    
                sh 'echo $pass |docker login --username $user --password-stdin' 
                sh 'docker push vraj0073/my_first_job:Sell_it_MarketPlace'
                
}
                
            }
        }
    }
    stage("Deploy"){
        steps{
            script{
                def dockerCmd = 'docker run -p 8080:8080 vraj0073/my_first_job:Sell_it_MarketPlace'
                sshagent(credentials: ['ec2-user']){

                sh "ssh -o StrickHostKeyChecking=no ec2-user@52.201.222.124 ${dockerCmd}"
                echo "App Deployed"

                }
                
            }   
        }
    }
    }
}