import React,{Component} from 'react';
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
    handleSubmit=(e)=>{
        this.setState({email:"",password:""})
        e.preventDefault()

    }
    handleChange=(e)=>{
        // console.log(e.target.value,"sdfsf")
        const {name,value}=e.target
        console.log(name,value,"Asdsdsf")
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I Already Have An Account ?</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
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
                <CustomButton type="submit" >
                    Sign In
                </CustomButton>
                </form>
            </div>
         )
    }
}

export default SignIn;