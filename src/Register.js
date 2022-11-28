import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import App from './App';
import './Register.css'
import goo from './images/google.png'
import face from './images/facebook.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { auth, provider, provider1 } from './firebase'
import {useDispatch} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import Login from './Login';

function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            )
            .then((authuser) => {
                console.log(authuser);
            })
            .catch((error) => { 
                alert(error.message);
            });
    };

    const signInEmail = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authuser) => {
            console.log(authuser);
        })
        .catch((error) => {
            alert(error.message)
        })
    };


    const signIn = () => {
        auth.signInWithPopup(provider)
        .then (({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            }))
        })
        .catch(error => alert(error.message));
    }

    const facebookSignin = () => {
        auth.signInWithPopup(provider1)
        
        .then(function(result) {
           var token = result.credential.accessToken;
           var user = result.user;
             
           console.log(token)
           console.log(user)
        }).catch(function(error) {
           console.log(error.code);
           console.log(error.message);
        });
     }
     
    return (
        <> 
            <div className='register'>
                <div className='form_frame'>
                    <div className='compare_body'>
                    <div className='compare_box'>
                        <div className='compare_box_hl'>
                            Join the LARGEST Cam Site
                        </div>
                        <div className='compare_box_row'>
                            <div className='compare_box_img'>
                                <img src='https://static-assets.highwebmedia.com/images/join-cam.png' alt='vijay'/>
                            </div>
                            <div className='compare_box_txt'>
                                Thousands of Live Amateurs <br />Broadcasting From Home
                            </div>
                        </div>
                        <div className='compare_box_row'>
                            <div className='compare_box_img'>
                                <img src='https://static-assets.highwebmedia.com/images/join-chart.png' alt='vijay'/>
                            </div>
                            <div className='compare_box_txt'>
                                The FASTEST GROWING <br />Free Cam Chat Community
                            </div>
                        </div>
                        <div className='compare_box_row noline'>
                            <div className='compare_box_img'>
                                <img src='https://static-assets.highwebmedia.com/images/join-nocc.png' alt='vijay'/>
                            </div>
                            <div className='compare_box_txt'>
                                No Credit Card Needed and <br />E-Mail Address is Optional
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='register_body'>
                    <div className='emailpwd'>
                        <h1>Create Your Free Account</h1>
                        <p>You must be over 18 years old to register.</p>
                        <form>
                            <div className='fieldset_main'>
                                <div className='input'>
                                    <input ref={emailRef} placeholder='Email' type='email' />
                                </div>
                                <div className='input'>
                                    <input ref={passwordRef} placeholder='Password' type='password' />
                                </div>
                                    <button className='buttonSignIn' onClick={signInEmail}>Sign In</button>
                                    <button className='button' onClick={register}>Create Free Account</button>
                            </div>
                        </form>   
                    </div>
                    <hr />
                    <div className='google'>
                        <img src={goo} alt='vijay' onClick={signIn} />
                    </div>
                    <div className='facebook'>
                        <img src='https://i.stack.imgur.com/ZW4QC.png' alt='vijay' onClick={facebookSignin} />
                    </div>
                    <div className='email_disclosure'>
                        <p>Email addresses, when provided, are only used for friend notifications, broadcast and payout reminders, newsletter, and account verification. Your email address is never sold or shared.</p>
                    </div>
                </div>
            </div>
            </div>      
        </>
    )
}

export default Register