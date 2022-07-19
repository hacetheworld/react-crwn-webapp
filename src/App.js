import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import Shop from './pages/shop/shop.page';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

function App() {
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

export default App;
