import React from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "./navbar";
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { useAuthContext } from "../App"
import { useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

async function handleLogin(email: string, password: string) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    console.log(user)
  } catch(e) {
    console.error(e)
  }
}

async function handleSignup(email: string, password: string) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    // We are signed in at this point
  } catch(e) {
    console.log(e)
  }
}


export default function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = useAuthContext()
  
  useEffect(() => {
    if (user) navigate("/grid")
  }, [user])

  return (
    <div>
      <Navbar></Navbar>
        <div className="login-box">
          <h2>Log into your account</h2>
          <form>
            <label>
              <input type="text" id="name" placeholder="Username" onChange={(e) => setEmail(e.target.value) }/>
            </label>
            <label>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
            </label>
          </form>
          <button onClick={() => handleLogin(email, password)}>Log in</button>
          <hr/>
          <h2>Log in with</h2>
          <div className="alter-login">
            <img src={require("../imgs/google.png")}/>
            <img src={require("../imgs/facebook.png")}/>
            <img src={require("../imgs/twitter.png")}/>
          </div>
          <hr/>
          <h2>Don't have an account yet?</h2>
          <form>
            <label>
              <input type="text" id="name" placeholder="Username" onChange={(e) => setEmail(e.target.value) }/>
            </label>
            <label>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
            </label>
          </form>
          <button onClick={() => handleSignup(email, password)}>Sign up</button>
        </div>
    </div>
      
  )
}

//signup on another page? or at least add the same text fields