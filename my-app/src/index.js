import React from 'react';
import ReactDOM, { render } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Landing from './components/landing.tsx';
import Login from './components/login.tsx';
import Grid from './components/grid.tsx';
import NewProposal from './components/newProposal.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />}/>
        <Route path="grid" element={<Grid />}/>
          <Route path="grid/newProposal" element={<NewProposal />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
