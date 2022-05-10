import React from "react";
import { render } from 'react-dom';

export default function ProposalCard (props: any) {
  return (
    <div className="proposal-card">
      <img src={require("../imgs/user.png")}/>
      <h3>{props.name}</h3>
      <p>Category: {props.category}</p>
      <p>Duration: {props.duration}</p>
      <p>Bet: {props.bet} CZK</p>
      <a href="#">Details</a>
  </div>
  )
}