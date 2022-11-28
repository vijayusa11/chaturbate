import { Link } from 'react-router-dom'
import React from 'react'
import './Broadcast.css'

function Broadcast() {
    return (
        <div className='broadcast'>
            <div className='content1'>
                <div className='content1__body'>
                    <h1>Broadcast Requirements</h1>
                    <p>To broadcast; please submit <span><Link to='/passauth'>age verification</Link></span> documentation.</p>
                    <Link to='/passauth'>
                        <div className='bar__right'>
                            <h2>Submit Age Verification</h2>
                            <img src='https://static-assets.highwebmedia.com/images/arrow-white.gif?6afe2ba49479' alt='vijay' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Broadcast
