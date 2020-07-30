import React from "react";
import { Link } from "react-router-dom";


// import App from "../App.css"


const NavBar = () => {
  return (
    <div className="reactNavDiv">
      <nav className="reactNav">
        <h3 className="navTitle">Expat Journal</h3>
        <Link className="navLink" to="/Landing">
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
    </div>
  );

};

export default NavBar;

