import React from "react";
import {Route, Switch } from "react-router-dom";
import "./App.css";
import register from "./components/register";
import login from "./components/login";
import FormCreateStoryPictures from "./components/FormCreateStoryPictures";
import Landing from "./components/Landing"

import "./App.css";

import NavBar from "./components/NavBar";
import DisplayMap from "./components/DisplayMap.js"

const App = () => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className="App">
      {/* <button onClick={logout}>Log Out</button> */}
      <NavBar />
      {/*<FormCreateStoryPictures />*/}
        <Switch>
          <Route exact path="/Register" component={register} />
          <Route exact path="/Login" component={login} />
          <Route exact path="/Contribute" component={FormCreateStoryPictures} />
          <Route exact path="/Landing" component={Landing} />
          <Route path="/Discover" component={DisplayMap}/> 
        </Switch>
    </div>
  );
};

export default App;
