import React from 'react'
import './Header.css'
import {User} from './User'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    return (
        
        <div className='header'>
            <div className='header__left'>
                
                    <img onClick={() => history.push('/')} src='https://files.oyebesmartest.com/uploads/preview/insta-107322053-3xw4vwqyw.jpeg' alt='Vijay'/> 
               
            </div>
            <div className='header__right'>
                <User />
            </div>
        </div>
        
    )
}

export default Header
