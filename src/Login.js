import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'

function Login() {


    const signIn = ()=>{

    }
    return (
        <div className="login">
            <div className="login__container">
            <img alt="WhatsApp.svg" 
                src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" />
            
                
            <div className="login__text">
                <h1>Sign in to Whatsapp</h1>
            </div>  

            <Button  onClick={signIn}>
                Sign in with Google
            </Button>
            </div>
        </div>
    );
}

export default Login
