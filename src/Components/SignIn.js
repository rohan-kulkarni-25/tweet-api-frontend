import React, { Component } from 'react'
import './Styles/Signin.css'
import { signInWithGoogle } from "../Firebase/firebase.utils.js";
import { FcGoogle } from 'react-icons/fc'

export default class SignIn extends Component {
  render() {
    return (
      <div className='signin-page'>
        <FcGoogle />
        <button className='google-signin' onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      </div>
    )
  }
}