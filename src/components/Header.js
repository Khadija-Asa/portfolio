import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from './../assets/illustrations/icon-logo.png'
import './../styles/header.css';

// Icons
import { IconHome, IconLicense, IconBriefcase, IconSend, IconBrandLinkedin, IconBrandGmail, IconBrandGithub } from '@tabler/icons';

const Header = () => {
  return (
    <section>

      {/* Menu for tablet/desktop */}
      <nav className='navbar'>

        <ul className='navbar-links'>
          <li className='navbar-item'>
            <NavLink to="/">
              <img src={logo} alt="Logo Khadidja A." />
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/">
              <IconHome size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >home</span>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/services">
              <IconLicense size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >serv <b></b> ices</span>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/portfolio">
              <IconBriefcase size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >port <br /> folio</span>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/contact">
              <IconSend size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >contact</span>
            </NavLink>
          </li>
        </ul>

        <div className="social-media">
          <h1>contact</h1>
          <p class="social-banner">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><IconBrandLinkedin size={30} stroke={1.5}/></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><IconBrandGmail size={30} stroke={1.5}/></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IconBrandGithub size={30} stroke={1.5}/></a>
          </p>
        </div>

      </nav>

      {/* Menu for mobile */}
      <nav className='navbar-mobile'>

        <div className="navbar-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo Khadidja A." />
          </NavLink>
        </div>

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