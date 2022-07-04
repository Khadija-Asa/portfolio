import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from './../assets/illustrations/icon-logo.png'
import './../styles/header.css';

// Icons
import { IconHome, IconLicense, IconBriefcase, IconSend, 
         IconBrandLinkedin, IconBrandGmail, IconBrandGithub, IconPhone } from '@tabler/icons';

const Header = () => {
  return (
    <section>

      {/* Menu for tablet/desktop */}
      <nav className='navbar'>

        <ul className='navbar-links'>
          <li className='navbar-item-logo'>
            <NavLink to="/">
              <img src={logo} alt="Logo Khadidja A." />
            </NavLink>
          </li>
          <li className='navbar-item active'>
            <NavLink className='navbar-link' to="/">
              <IconHome size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >home</span>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/services">
              <IconLicense size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >services</span>
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink className='navbar-link' to="/portfolio">
              <IconBriefcase size={30} stroke={1.5}/> <br /> 
              <span className='navbar-subtitle' >portfolio</span>
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
          <p class="social-banner active">
            <a href="tel:+336.14.72.05.66" title='call me'><IconPhone size={30} stroke={1.5}/></a>
            <a href="https://www.linkedin.com/in/khadidja-ait-si-ali/" title='visite me' target="_blank" rel="noopener noreferrer"><IconBrandLinkedin size={30} stroke={1.5}/></a>
            <a href="mailto:khadidja.aitsiali@gmail.com" title='message me'><IconBrandGmail size={30} stroke={1.5}/></a>
            <a href="https://github.com/Khadija-Asa" title='github me' target="_blank" rel="noopener noreferrer"><IconBrandGithub size={30} stroke={1.5}/></a>
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