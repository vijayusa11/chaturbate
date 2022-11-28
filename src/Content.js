import React from 'react'
import './Content.css'
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function Content() {
    const user = useSelector(selectUser);

    return (
        <div className='content'>
            <div className='content_body'>
                {!user ? (<div className='ie-support-notice'>
                    <p>You do not have a verified email address on file. Improve account security and receive follower notifications by <span>verifying your email address now. (dismiss)</span></p>
                </div>) : (<> </>)}
                
            </div>
        </div>
    )
}

export default Content
