import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import register from "./components/register";
import login from "./components/login";
import FormCreateStoryPictures from "./components/FormCreateStoryPictures";
import NavBar from "./components/NavBar";
import DisplayMap from "./components/DisplayMap.js";
import PrivateRoute from "./utils/PrivateRoute";

import "./App.css";

const App = () => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  return (
    // <Router>
    <div className="App">
      {/* <button onClick={logout}>Log Out</button> */}
      <NavBar />
      {/*<FormCreateStoryPictures />*/}
      {/* <Switch>
        <Route exact path="/Register" component={register} />
        <Route path="/Login" component={login} /> */}

        {/* These are the private Routes */}
        {/* <PrivateRoute
          exact
          path="/Contribute"
          component={FormCreateStoryPictures}
        />
        <PrivateRoute exact path="/Discover" component={DisplayMap} />
      </Switch> */}
    </div>
    //  </Router>
  );
};

export default App;
