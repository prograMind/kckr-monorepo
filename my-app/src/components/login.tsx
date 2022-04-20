import React from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import Navbar from "./navbar.tsx";

export default function Login () {
  return (
    <div>
      <Navbar></Navbar>
        <div className="login-box">
          <h2>Log into your account</h2>
          <form>
            <label>
              <input type="text" id="name" placeholder="Username"/>
            </label>
            <label>
              <input type="password" placeholder="Password"/>
            </label>
          </form>
          <button>Log in</button>
          <hr/>
          <h2>Log in with</h2>
          <div className="alter-login">
            <img src={require("../imgs/google.png")}/>
            <img src={require("../imgs/facebook.png")}/>
            <img src={require("../imgs/twitter.png")}/>
          </div>
          <hr/>
          <h2>Don't have an account yet?</h2>
          <button>Sign up</button>
        </div>
    </div>
      
  )
}