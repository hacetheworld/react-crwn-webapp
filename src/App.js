import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import Shop from './pages/shop/shop.page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import {  auth, createUserProfileDocument } from './firebase/firbase.util';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {
  unsubscribeFromAuth=null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
      // console.log(user);
      if (userAuth){
      const userRef= await createUserProfileDocument(userAuth)
      onSnapshot(userRef,snapShot=>{
        setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        })
      })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    // const {currentUser}=this.state
    // console.log(currentUser);
    return (
      <div >
        <Header />
        <Switch>
        <Route exact path="/" component={HomePage}  />
        <Route exact path="/shop" component={Shop}  />
        <Route exact path="/signin" component={SignInSignUpPage}  />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
