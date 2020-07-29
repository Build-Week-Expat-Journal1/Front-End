
//----------//
// IMPORTS  //
//----------//
import React, { useState } from "react";
import { connect } from 'react-redux';
import { userLogin } from '../actions/loginAction';


//-----------------------//
// BEGIN LOGIN COMPONENT //
//-----------------------//
const Login = (props) => {
  const [user, setUser] = useState({
    username: "", 
    password: "",
  });

  const { username, password } = user; 


  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");

    props.userLogin( user );
      props.history.push("/Discover");
    setUser("");
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="username" name="username" value={username} onChange={onChange} />
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

const mapStateToProps = state => {
   return ({
      token: state.token,
      error: state.error

   })
}

export default connect(
   mapStateToProps, 
   { userLogin } 
)(Login);
