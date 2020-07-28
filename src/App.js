import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Register from "./components/register";
import Login from "./components/login";

import "./App.css";
import FormCreateStoryPictures from "./components/FormCreateStoryPictures";
import NavBar from "./components/NavBar";

const App = () => {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    <div className="App">
      <button onClick={logout}>Log Out</button>
      <NavBar />
      logOutButton
      <FormCreateStoryPictures />
      <Router>
        <Switch>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/*Because im using Router  make sure to use /register path after localhost3006  you hae to access to the exact path in order for the forms to render 

Example: 
localhost3006/register  
localhost3006/login */
