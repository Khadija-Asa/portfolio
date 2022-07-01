import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../assets/illustrations/icon-logo.png'
import './../styles/header.css';

// Icons
import { IconHome, IconLicense, IconBriefcase, IconSend } from '@tabler/icons';

const Header = () => {
  return (
    <section>

      <div className="navbar-logo">
        <NavLink to="/">
          <span>khadidja ait si ali</span>
        </NavLink>
        <span className="navbar-line"></span>
      </div>

      {/* Menu for tablet/desktop */}
      <nav className='navbar'>
        <ul className='navbar-links'>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              <span className="link-number">01</span> home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/services">
            <span className="link-number">02</span> services
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/portfolio">
            <span className="link-number">03</span> portfolio
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/contact">
            <span className="link-number">04</span> contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Menu for mobile */}
      <nav className='navbar-mobile'>
        <ul className='navbar-links'>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              <IconHome color='#1A6449' stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/services">
            <IconLicense color='#1A6449' stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/portfolio">
            <IconBriefcase color='#1A6449' stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/contact">
            <IconSend color='#1A6449' stroke={1.75}/>
            </NavLink>
          </li>
        </ul>
      </nav>

    </section>      
  );
};

export default Header;