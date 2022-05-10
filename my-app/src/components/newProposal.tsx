import React, { useState } from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Input from "./Input";

export default function NewProposal () {

  return (
    <div>
      <Navbar></Navbar>
      <div className="login-box">
        <h2>Create a new proposal</h2>
        <Input 
          type="text"
          label="Name your challenge"
          placeholder="name"
          id="proposal-name"
          />
        <Input 
        type="text"
        label="Choose category"
        placeholder="category"
        id="category"
        />
        <Input
        type="range"
        label="Weeks between 1 and 10"
        id="duration" />
        <form>
          <label htmlFor="duration">Weeks between 1 and 10</label>
            <input type="range" id="duration" min="1" max="10"/>
          <label>How much do you want to bet?</label>
            <input type="number" id="bet" placeholder="bet"/>
        </form>
        <button>Create</button>
      </div>
    </div>

  )
}