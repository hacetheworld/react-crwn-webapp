import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{Component} from 'react';
import { auth, signInWithGoogle } from '../../firebase/firbase.util';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';

import "./signin.scss"
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""

         }
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        const {email,password}=this.state
        try {
            await signInWithEmailAndPassword(auth,email,password)
            this.setState({email:"",password:""})


        } catch (error) {
            console.log("error",error);
        }



    }
    handleChange=(e)=>{
        // console.log(e.target.value,"sdfsf")
        const {name,value}=e.target
        // console.log(name,value,"Asdsdsf")
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I Already Have An Account ?</h2>
                <span>Sign in with your email and password </span>
                <form  onSubmit={this.handleSubmit}>
                <FormInput
                name ="email"
                type="email"
                label="Email"
                handleChange={this.handleChange}
                value={this.state.email}
                required
                />
                <FormInput
                name ="password"
                type="password"
                label="Password"
                handleChange={this.handleChange}
                value={this.state.password}
                required
                />
                <div className="buttons">
                <CustomButton type="submit" >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
                </form>
            </div>
         )
    }
}

export default SignIn;