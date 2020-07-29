import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import register from "./components/register";
import login from "./components/login";
import FormCreateStoryPictures from "./components/FormCreateStoryPictures"

import "./App.css";
// import FormCreateStoryPictures from "./components/FormCreateStoryPictures";
import NavBar from "./components/NavBar";

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
          {/*} <Route exact path="/" component={}/> */}
        {/*} <Route path="/Discover" component={}/> */}
        </Switch>
    </div>
  );
};

export default App;
