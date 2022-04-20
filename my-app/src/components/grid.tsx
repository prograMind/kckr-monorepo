import React from "react";
import { render } from 'react-dom';
import { Link } from "react-router-dom";
import ProposalCard from "./proposalCard.tsx";
import Navbar from "./navbar.tsx";

export default function Grid () {
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid">
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
        <ProposalCard></ProposalCard>
      </div>
    </div>

  )
}