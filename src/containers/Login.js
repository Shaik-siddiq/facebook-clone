import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth, provider} from "../Firebase";
import {useStateValue,} from "../context/StateProvider";
import {actionTypes} from "../context/Reducer"
const Login = () => {
    const [state, dispatch] = useStateValue("")
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error)=>alert(error.message))
    }
  return (
    <div className="login">
        <div className="login_logo">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
            alt="no logo" />
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="facebook" />
        </div>
        <Button type="submit" onClick={signIn}>Sing In</Button>
    </div>
  )
}

export default Login;