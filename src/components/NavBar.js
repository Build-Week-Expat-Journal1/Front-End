import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import login from "../components/login.js";
import register from "../components/register";
import FormCreateStoryPictures from "../components/FormCreateStoryPictures.js"

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <h3>Expat Journal</h3>
        <Link to="/">Landing</Link>
        <Link to="/Login">Log In</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Discover">Discover</Link>
        <Link to="/Contribute">Contribute</Link>
      </nav>
      <Switch>
               {/*} <Route exact path="/" component={}/> */}
                <Route path="/Login" component={login}/> 
                <Route path="/Register" component={register}/>
                <Route path="/Contribute" component={FormCreateStoryPictures}/>
               {/*} <Route path="/Discover" component={}/> */}
            </Switch>
    </div>
  );
};

export default NavBar;
