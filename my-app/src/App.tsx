import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Landing from './components/landing';
import Login from './components/login';
import Grid from './components/grid';
import NewProposal from './components/newProposal';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
  from,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context"

import { User } from '@firebase/auth';
import { auth } from "./firebase"
import { createContext, useContext } from 'react';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

export const getHeaders = async (): Promise<{
  headers: {
    authorization: string;
  };
}> => {
  await new Promise(resolve => {
    auth.onAuthStateChanged(resolve)
  })
  const token = await auth.currentUser?.getIdToken();
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  };
};

const authLink = setContext(getHeaders);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authLink, httpLink])
});

client.query({
  query: gql`
    query Me {
      me {
        id
        email
      }
    }
  `
}).then(console.log).catch(console.error)

//this is a variable with the ability to be passed
const AuthContext = createContext<User | null>(null)
//into the useContext hook; we first had to create it
export const useAuthContext = () => useContext(AuthContext)

export default () => {
  const [user, setUser] = useState<User | null>(null)
  auth.onAuthStateChanged(setUser)

  return (
  <AuthContext.Provider value={user}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="login" element={<Login />}/>
          <Route path="grid" element={<Grid />}/>
          <Route path="grid/newProposal" element={<NewProposal />}/>
      </Routes>
    </BrowserRouter>
  </AuthContext.Provider>)
}