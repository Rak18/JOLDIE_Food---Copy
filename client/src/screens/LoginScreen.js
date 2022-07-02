import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./LoginScreen.css";

import { useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/actions/userAction'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (localStorage.getItem("currentUser")) {
  //     window.location.href = "/";
  //   }
  // }, []);
  // const loginHandler = () => {
  //   const user = { email, password };
  //   dispatch(loginUser(user));
  // };

//notused
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();


  
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      // window.location.href = '/';
      history.push("./");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h1 className="login-screen__title">Login</h1>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            // e is an arguement
            onChange={(e) => setEmail(e.target.value)}
            //it means whatever value will come in email we will set in setEmail
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <Link to="/forgotpassword" className="login-screen__forgotpassword"
            tabIndex={4}>
              Forgot Password?
            </Link>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button  className="btn btn-primary"
         onClick={loginHandler}>
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
    //to this
  );
};

export default LoginScreen;