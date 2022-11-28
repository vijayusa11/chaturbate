import React, { useRef } from 'react'
import { auth } from './firebase';
import './PassAuth.css'
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function PassAuth() {
    return (
        <div className='passauth'>
            <div className='content2'>
                <div className='content_body'>
                    <h1>Independent Broadcaster Verification</h1>
                    <p>In order to be able to receive tokens from other members of the Chaturbate - free adult webcams, live sex, free sex chat community, please complete the following steps.
                    </p>
                    <p>If you plan on broadcasting by yourself, this is all you have to do. If you plan on
                        broadcasting with another person or multiple people, prior to their appearance through your account, these steps must be repeated for each person individually. If other people appear on your broadcast who have not completed these steps prior to their appearance on your account, your ability to earn tokens will be removed and may not be able to be restored.
                    </p>
                    <p>First, please review and, if acceptable, agree to the Independent Broadcaster Agreement. Next,
            you will need to upload your unexpired, government issued photo identification (a Drivers License or Passport)
            with a recent and recognizable photo of you. A high quality photo or scan of the ID must be uploaded, as well
            as a high quality photo of you holding the ID next to your face. For IDs with birthdate and photographs on
            separate sides or pages of the identification, you will need to submit images of both sides or pages, as
            applicable. If the photos you provide are too small or blurry, the verification will fail and your ability to
            earn tokens will be delayed.</p>
            <p>Please contact <span><a href="mailto:vijayjavascript.js@gmail.com" target="_blank">vijayjavascript.js@gmail.com</a></span> if you have any
            questions.<br /><br /></p>
            <p><strong>Step 1: </strong>
            <Link to="/performer_agreement/"><span> Agree to the Independent Broadcaster Agreement.</span></Link>
            </p>
            <p><strong>Step 2: </strong>
            <Link to="/performer_agreement/"><span> Upload ID / Verify your identity.</span></Link>
            </p>
            <h1>Guest Accounts</h1>
            <p>Adding guest accounts will allow everyone verified on the guest account to appear on your broadcasts. Guest accounts are not able to see any of your information besides your username and vice-versa.</p>
            <p>NOTE: All guest accounts will also have to add your username to their list of guest accounts in
            order to be listed as active.</p>
            <div className='guest'>
                <button className='user'>Enter UserName</button>
                <button className='add'>Add</button>
            </div>
            <p class="add-guest-error">You must be age verified in order to add guests.</p>
                </div>
            </div>
        </div>
    )
}

export default PassAuth
