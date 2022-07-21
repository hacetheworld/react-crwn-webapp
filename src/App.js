import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import Shop from './pages/shop/shop.page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firbase.util';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser:null
     }
  }
  unsubscribeFromAuth=null
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
      console.log(user);
      this.setState({currentUser:user})
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    const {currentUser}=this.state
    return (
      <div >
        <Header currentUser={currentUser} />
        <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route exact path="/shop" component={Shop}  />
        <Route exact path="/signin" component={SignInSignUpPage}  />
        </Switch>
      </div>
    );
  }
}



export default App;
