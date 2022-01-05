import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='navbar'>
      <div>
        <ul className='nav'>
          <Link to='/'>
            <li className='nav-link'>Home</li>
          </Link>
          <Link to='/students'>
            <li className='nav-link'>Students</li>
          </Link>
          <Link to='/contact-us'>
            <li className='nav-link'>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
