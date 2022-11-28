import React, { useState } from 'react'
import './Bar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import {useDispatch} from 'react-redux';
import Login from './Login';

function Bar() {
    const [user, loading] = useAuthState(auth);
    const [signIn, setSignIn] = useState(false);
    const dispatch = useDispatch()
    const feedback = () => {
        
    }
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <div className='bar'>
            
            {user ? (<div className='bar__lists'>
                <h2><Link to='/'>CHAT ROOMS</Link></h2>
                <h2><Link to='/broadcast'>BROADCAST YOURSELF</Link></h2>
                <h2>TAGS</h2>
            </div>) : (<> </>)}

            {!user ? (<> </>)
             : (
                <div className='bar__middle'>
                <h2><Link to='/myprofile'>My Profile</Link></h2>
                <h2><Link to='/register'>My Collection</Link></h2>
                <h2 onClick={feedback}><Link to='/feedback'>Send Feedback</Link></h2>
                <h2 onClick={signOut}><Link to='/feedback'></Link>Log Out</h2>
            </div>
            )}
        
        </div>
    )
}

export default Bar
