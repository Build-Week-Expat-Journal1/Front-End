import React from "react";
import { Link } from "react-router-dom";
import { Link, Switch, Route } from "react-router-dom";
import login from "./login.js";
import register from "../components/register";
import FormCreateStoryPictures from "../components/FormCreateStoryPictures.js"
import App from "../App.css"


const NavBar = () => {
  return (
    <div className="reactNavDiv">
      <nav className="reactNav">
        <h3 className="navTitle">Expat Journal</h3>

        <a href="https://expatphoto.netlify.app/" className="navLink">
          Landing
        </a>
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
