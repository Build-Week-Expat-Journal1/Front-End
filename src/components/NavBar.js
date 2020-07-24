import React from "react";
import {Link, Switch, Route} from "react-router-dom";
import login from "./components/login";


const NavBar = () => {

    return(
        <div className =  "NavBar">
            <nav>
                <h3>Expat Journal</h3>
                <Link to="/">Landing</Link>
                <Link to="/SignIn">Sign In</Link>
                <Link to="/SignUp">Sign Up</Link>
                <Link to="/Discover">Discover</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={}/>
                <Route path="/SignIn" component={login}/>
                <Route path="/SignUp" component={}/>
                <Route path="/Discover" component={}/>
            </Switch>

        </div>
    )
}

export default NavBar;