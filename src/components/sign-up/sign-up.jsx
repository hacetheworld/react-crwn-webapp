import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firbase.util';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import "./sign-up.scss"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""

         }
    }
    handleSubmit=async (e)=>{
        e.preventDefault()
        const {displayName,email,password,confirmPassword}=this.state
        if (password !==confirmPassword){
            alert("Password didn't match")
            return

        }
        try {
            const {user}=await createUserWithEmailAndPassword(auth,email,password)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:"",
                email:"",
                password:"",
                confirmPassword:""

             })

        } catch (error) {
            console.log("error in email password creation",error);
        }

    }
    handleChange=(e)=>{
        // console.log(e.target.value,"sdfsf")
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    render() {
        const {displayName,email,password,confirmPassword}=this.state
        return (
            <div className="sign-up">
                <h2 className='title'>I do not Have An Account ?</h2>
                <span>Sign up with your email and password </span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                name ="displayName"
                type="input"
                label="Display Name"
                handleChange={this.handleChange}
                value={displayName}
                required
                />
                <FormInput
                name ="email"
                type="email"
                label="Email"
                handleChange={this.handleChange}
                value={email}
                required
                />
                <FormInput
                name ="password"
                type="password"
                label="Password"
                handleChange={this.handleChange}
                value={password}
                required
                />
                 <FormInput
                name ="confirmPassword"
                type="password"
                label="Confirm Password"
                handleChange={this.handleChange}
                value={confirmPassword}
                required
                />
                <CustomButton type="submit" >Sign Up</CustomButton>
                </form>
            </div>
         )
    }
}

export default SignUp;