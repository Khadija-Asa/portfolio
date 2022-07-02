import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './../assets/illustrations/icon-logo.png'
import './../styles/header.css';

// Icons
import { IconHome, IconLicense, IconBriefcase, IconSend } from '@tabler/icons';

const Header = () => {
  return (
    <section>


      {/* Menu for tablet/desktop */}
      <nav className='navbar'>

        <NavLink className="navbar-logo" to="/">
          <img src={logo} alt="Logo Khadidja A." />
        </NavLink>

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

        <NavLink className="navbar-logo" to="/">
          <img src={logo} alt="Logo Khadidja A." />
        </NavLink>

        <ul className='navbar-links'>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              <IconHome stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/services">
            <IconLicense stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/portfolio">
            <IconBriefcase stroke={1.75}/>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/contact">
            <IconSend stroke={1.75}/>
            </NavLink>
          </li>
        </ul>

      </nav>

    </section>      
  );
};

export default Header;