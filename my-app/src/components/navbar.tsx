import React from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import NewProposal from "./newProposal";
import { useAuthContext } from "../App"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

async function handleLogout() {
  try {
    signOut(auth)
  } catch (e) {
    console.log(e)
  }
}

export default function Navbar () {

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require("../imgs/logo.jpg")}/>
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link to="newProposal">
          Create a proposal
        </Link>
        <img src={require("../imgs/message.png")}/>
        <img src={require("../imgs/bell.png")}/>
        <div className="user-button">
          <img src={require("../imgs/user.png")}/>
            <div className="user-dropdown">
              <p>Username</p>
              <p>My profile</p>
              <p>My proposals</p>
              <p>Active contracts</p>
              <button onClick={() => handleLogout()}>Sign out</button>
            </div>
        </div>
      </div>
  </div>
  )
}