import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  
  return (
    <div className="NavBar">
      <nav>
        <h3>Expat Journal</h3>
        <Link to="/">Landing</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/Discover">Discover</Link>
      </nav>
       {/* <Switch>
                <Route exact path="/" component={FormCreateStoryPictures}/>
                <Route path="/SignIn" component={Login} />
                <Route path="/SignUp" component={Register} />
                <Route path="/Discover" component={FormCreateStoryPictures} /> 
                
      </Switch> */}
    </div>
    )};
    export default NavBar;