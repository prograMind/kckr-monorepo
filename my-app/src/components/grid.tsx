import React, { useEffect } from "react";
import { render } from 'react-dom';
import { Link, useNavigate } from "react-router-dom";
import ProposalCard from "./proposalCard";
import Navbar from "./navbar";
import { useAuthContext } from "App";

export default function Grid () {
  const navigate = useNavigate()
  const user = useAuthContext()

  useEffect(() => {
    if (!user) navigate("/login")
  }, [user])

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