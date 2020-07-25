
//----------//
// IMPORTS  //
//----------//
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

//-----------------------//
// BEGIN LOGIN COMPONENT //
//-----------------------//
const Login = (props) => {
  const [user, setUser] = useState({
    email: "", // DOES THIS NEED TO BE USERNAME? From Jennifer YES it does or I need to change the database ;)
    password: "",
  });

  const { email, password } = user; //CHANGE EMAIL TO USERNAME?


  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");

    props.userLogin({ user }).then(() => {
      props.history.push("/Discover");
    });
    setUser("");

  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default withRouter(Login);

