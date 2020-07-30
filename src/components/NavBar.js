import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import register from "./register";
import login from "./login";
import FormCreateStoryPictures from "./FormCreateStoryPictures";

import DisplayMap from "./DisplayMap.js";
import PrivateRoute from "../utils/PrivateRoute";

// import App from "../App.css"

const NavBar = () => {
  return (
    <Router>
      <div className="reactNavDiv">
        <nav className="reactNav">
          <h3 className="navTitle">Expat Journal</h3>
          <Link className="navLink" to="/">
            Landing
          </Link>
          <Link className="navLink" to="/Login">
            Log In
          </Link>
          <Link className="navLink" to="/Register">
            Register
          </Link>
          <Link className="navLink" to="/Discover">
            Discover
          </Link>
          <Link className="navLink" to="/Contribute">
            Contribute
          </Link>
        </nav>

        <Switch>
          <Route path="/Register" component={register} />
          <Route path="/Login" component={login} />

          {/* These are the private Routes */}
          <PrivateRoute
            exact
            path="/Contribute"
            component={FormCreateStoryPictures}
          />
          <PrivateRoute exact path="/Discover" component={DisplayMap} />
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
