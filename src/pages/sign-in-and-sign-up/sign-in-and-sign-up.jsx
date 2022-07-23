import React from 'react';
import SignIn from '../../components/sign-in/signin';
import SignUp from '../../components/sign-up/sign-up';
import "./sign-in-and-sign-up.scss"

const SignInSignUpPage=()=>(
    <div className="sign-in-and-sign-up">
       <SignIn/>
       <SignUp/>
    </div>
)

export default SignInSignUpPage;