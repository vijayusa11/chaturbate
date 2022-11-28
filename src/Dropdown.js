import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from './firebase';
import {useDispatch} from 'react-redux';
import { logout } from './features/userSlice';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useDispatch()
  const signOut = () => {
    auth.signOut().then(() => {
        dispatch(logout())
    })
}

  return (
    <Router>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              if (item.title === 'Log Out') {
                <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                onClick={signOut}
              >
              </Link>
              }
              else
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Router>
  );
}

export default Dropdown;
