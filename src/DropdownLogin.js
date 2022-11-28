import React, { useState } from 'react';
import { MenuItemsLogin } from './MenuItemsLogin';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function DropdownLogin() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Router>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItemsLogin.map((item, index) => {
          return (
            <li key={index}>
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

export default DropdownLogin;
