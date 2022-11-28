import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Bar from './Bar';
import Content from './Content';
import Body from './Body';
import Main from './Main';
import Footer from './Footer';
import { login } from './features/userSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from './firebase'
import Broadcast from './Broadcast';
import PassAuth from './PassAuth';
import PerformerAgree from './PerformerAgree';
import {useDispatch} from 'react-redux'
import Loading from './Loading';
import Login from './Login';

function App() {
  const [user, loading] = useAuthState(auth);
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch()

   if (loading) {
    return ( 
        <Loading />
    );
  }
  console.log('user', user)
  return (
    <Router>
       {!user ? (
         <>
        <Header />
        <Bar />
        <Content />
        <Register />
        <Footer />         
        </>
      ) :
    (
    <div className="app">
        {/* Header */}
        <Header />
        <Bar />
      
       
        <Switch>
          <Route path="/register" exact>
            <Register />
          </Route>          
          <Route path="/broadcast" exact>
            <Broadcast />
          </Route>
          <Route path="/passauth" exact>
            <PassAuth />
          </Route>
          <Route path="/performer_agreement" exact>
            <PerformerAgree />
          </Route>

          <Route path='/' exact>           

            {/* Body */}
              <Body />
              <Main />
                        
          </Route>

          {/* Footer */}
        </Switch>   
        <Footer />
    </div>
    )}
    </Router>
  );
}

export default App;
