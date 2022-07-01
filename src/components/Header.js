import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../assets/illustrations/icon-logo.png'

const Header = () => {
  return (
    <nav className='navbar'>

        <NavLink to="/">
          <img className='navbar-logo' src={logo} alt="Logo Space Tourism" />
        </NavLink>
        <span className="navbar-line"></span>

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
  );
};

export default Header;