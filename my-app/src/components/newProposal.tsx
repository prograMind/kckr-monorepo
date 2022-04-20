import React, { useState } from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import Navbar from "./navbar.tsx";

export default function NewProposal () {
  const [name, setName] = useState("");
  return (
    <div>
      <Navbar></Navbar>
      <div className="login-box">
        <h2>Create a new proposal</h2>
        <form>
          <label>Name your challenge</label>
            <input type="text" id="proposal-name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <label>Choose category</label>
            <input type="text" id="category" placeholder="category"/>
          <label for="duration">Weeks between 1 and 10</label>
            <input type="range" id="duration" min="1" max="10"/>
          <label>How much do you want to bet?</label>
            <input type="number" id="bet" placeholder="bet"/>
        </form>
        <button>Create</button>
      </div>
    </div>

  )
}