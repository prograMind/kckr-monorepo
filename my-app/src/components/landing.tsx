import React from "react";
import { render } from 'react-dom';
import { Outlet, Link } from "react-router-dom";
import Login from "./login";
import Grid from "./grid";

export default function Landing () {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={require("../imgs/logo.jpg")}/>
        </div>
        <div>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
          <Link to="login">Login</Link>
          <Link to="grid">Proposals</Link>
          <Outlet />
        </div>
      </div>
      <div className="hero">
        <div className="left-side">
          <h1>Achieve your goals or pay the price!</h1>
          <h2>Finally a solution that will make you do the things you keep putting off.</h2>
          <a href="#">Let's kick it!</a>
        </div>
        <div>
          <img src={require("../imgs/vector.png")}/>
        </div>
      </div>
    <div className="section-two">
      <div>
        <img src={require("../imgs/goal.png")}/>
        <h3>Choose your goal</h3>
        <p>Lose weight, write your thesis, crush your KPIs</p>
      </div>
      <div>
        <img src={require("../imgs/opponent.png")}/>
        <h3>Pick an opponent</h3>
        <p>Challenge a friend, or a challenger from afar</p>
      </div>
      <div>
        <img src={require("../imgs/betting.png")}/>
        <h3>Set the stakes</h3>
        <p>Bet on yourself!</p>
      </div>
    </div>
    </div>
  )
}