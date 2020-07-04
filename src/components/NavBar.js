import React from 'react';
import { render } from 'react-dom';
import '../styles/NavBar.css';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="surreal-estate-logo" className="logoImage" />

      <ul className="navbar-links">
        
          <li className="navbar-links-item">
              <a href="#">View Properties</a>
          </li>
          <li className ="navbar-links-item">
              <a href="#">Add a Property</a>
          </li>

      </ul>

    </div>

  );
}

export default NavBar;
