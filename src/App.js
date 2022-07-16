import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
const Hats =() =>{
  return ( <h1>Hello Hat</h1> );
}

function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={HomePage}  />
      <Route exact path="/hats" component={Hats}  />
      </Switch>
    </div>
  );
}

export default App;
