import React, { useState } from "react";
import { connect } from 'react-redux';
import { signUp } from '../actions/signUpAction';

const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    password2: "",
  });

  const { name, username, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Register submit");
    props.signUp(user).then(() => props.history.push("/"));
    setUser({
       username: '',
       password: ''
    });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Sign Up</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input type="text" name="username" value={username} onChange={onChange} />
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
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};
export default connect(
   null, 
   {signUp}
)(Register);
