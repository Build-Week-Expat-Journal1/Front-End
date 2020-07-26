import React from "react";

import { Link, Switch, Route } from "react-router-dom";
import login from "../components/login.js";
import register from "../components/register";
import FormCreateStoryPictures from "../components/FormCreateStoryPictures.js"
import App from "../App.css"

logOutButton


const NavBar = () => {
  
  return (
    <div className="reactNavDiv">
      <nav className="reactNav">
        <h3 className="navTitle">Expat Journal</h3>
        <Link className="navLink" to="/">Landing</Link>
        <Link className="navLink"  to="/Login">Log In</Link>
        <Link className="navLink"  to="/Register">Register</Link>
        <Link className="navLink"  to="/Discover">Discover</Link>
        <Link className="navLink"  to="/Contribute">Contribute</Link>
      </nav>

      <Switch>
               {/*} <Route exact path="/" component={}/> */}
                <Route exact path="/Login" component={login}/> 
                <Route exact path="/Register" component={register}/>
                <Route exact path="/Contribute" component={FormCreateStoryPictures}/>
               {/*} <Route path="/Discover" component={}/> */}
            </Switch>
    </div>
  );

logOutButton
       

    </div>
    )};
    export default NavBar;