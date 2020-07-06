import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css';
import logo from '../assets/logo.png';

const NavBar = () =>
  // const history = createMemoryHistory();
  (
    <div className="navBar">
      <img
        src={logo}
        alt="surreal-estate-logo"
        className="logoImage"
      />

      <ul className="navbar-links">

        <li className="navbar-links-item">
          <Link to="/" className="view-link">
            View Properties
          </Link>
        </li>

        <li className="navbar-links-item">
          <Link to="/add-property" className="add-link">
            Add Property
          </Link>
        </li>

      </ul>
    </div>

  );
export default NavBar;
