import React, { useState } from 'react'
import { CognitoUser, AuthenticationDetails, CognitoUserPool, CognitoUserAttribute } from "amazon-cognito-identity-js";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from 'bootstrap';

export const Login = () => {
    let history = useNavigate();
    
  const [Password,setPassword]=useState("");
  const [Email,setEmail]=useState("");
  const poolData = {
    UserPoolId: 'us-east-1_pfYk8NUoj',
    ClientId: '33uodu095oc71qicdq8nl8c8kl'
  };
  const UserPool = new CognitoUserPool( {
    UserPoolId: 'us-east-1_pfYk8NUoj',
    ClientId: '33uodu095oc71qicdq8nl8c8kl'
  });

    const validSubmit = (event) =>{
        
        event.preventDefault();
        alert("hello")
    const user = new CognitoUser({
      Username: Email,
      Pool: UserPool
    });
    const authDetails = new AuthenticationDetails({
      Username: Email,
      Password: Password
    });

    user.authenticateUser(authDetails, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },

      onFailure: err => {
        console.error("onFailure:", err);
        alert(err)
      },

      newPasswordRequired: data => {
        console.log("newPasswordRequired:", data);
      }
    });
    }
  const validPassword = (e) => {
    const pas = e.target.value;

    setPassword(pas);
    console.log(Password)
  }
  const validEmail = (e) =>{
    const mail = e.target.value;

    setEmail(mail);
    console.log(Email)
  }
  return (

    
    <>
    <div>
                <label className='mt-2'>Email :  </label>
                <input required  type='text' onChange={validEmail }/>
                
    </div>
    <div>
                <label className='mt-2'>Password :  </label>
                <input required  type='text' onChange={validPassword }/>
                
    </div>
                <button type='submit' onClick={validSubmit}>submit</button>
                
    </>
  )
}
