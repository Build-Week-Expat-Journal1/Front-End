import React from "react";
logOutButton
import { Link } from "react-router-dom";



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
logOutButton
       {/* <Switch>
                <Route exact path="/" component={FormCreateStoryPictures}/>
                <Route path="/SignIn" component={Login} />
                <Route path="/SignUp" component={Register} />
                <Route path="/Discover" component={FormCreateStoryPictures} /> 
                
      </Switch> */}

    </div>
    )};
    export default NavBar;