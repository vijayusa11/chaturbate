import React, { useState } from 'react'
import './User.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Dropdown from './Dropdown';
import DropdownLogin from './DropdownLogin';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function User() {
    
    const [user, loading] = useAuthState(auth);
    const emailId = user?.email
    const papa = emailId ? emailId.substring(0, emailId.indexOf("@")) : '';
    return (
        <div className='user'>

            <div className='user__name'>
                
               <img src='https://static-assets.highwebmedia.com/images/gendericons/male.svg' alt='vijay' />
               
                <h4>{papa}</h4>
                <ArrowDropDownIcon />
                           
            </div>
                    
            <table className='user__details'>
                <tbody>
                    <tr>
                        <th>Status:</th>
                            <td className='user_padding'>Basic Member</td>
                            <td className='user__link'>(Upgrade)</td>
                    </tr>
                    <tr>
                        <th>You have:</th>
                            <td className='user_padding'><strong>0 Tokens</strong></td>
                            <td className='user__link'>(Get More)</td>
                    </tr>
                </tbody>
            </table>
                
            </div>
        
       
    )
}

export  {User}

