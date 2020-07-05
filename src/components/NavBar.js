import React from 'react';
import { Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import '../styles/NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  const history = createMemoryHistory();
  return (
    <Router history = {history}>
      <div className="navBar">
        <img src={logo} alt="surreal-estate-logo" className="logoImage" />

        <ul className="navbar-links">

          <li className="navbar-links-item">
            <Link to="/">
              View Properties
            </Link>
          </li>

          <li className="navbar-links-item">
            <Link to="add-property">Add Property</Link>
          </li>

        </ul>
      </div>
    </Router>

  );
}

export default NavBar;
