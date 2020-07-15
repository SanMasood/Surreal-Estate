import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

import '../styles/NavBar.css';
import '../styles/facebook.css';
import logo from '../assets/logo.png';

const NavBar = ({
  onLogin, userId, onLogout,
}) => (
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
    <div className="facebook-buttons">
      {!(userId) ? (

        <FacebookLogin
          appId="2344338855868785"
          autoLoad={false}
          callback={onLogin}

          fields="name,email,picture"
          cssClass="facebook-login-class"
         // icon="fa-facebook"
        />
      )
        : (
          <button
            type="button"
            className="facebook-logout-class"
            onClick={onLogout}
          >
            Sign Out
          </button>
        )}
    </div>
  </div>

);
NavBar.propTypes = {
  onLogin: PropTypes.bool,
  userId: PropTypes.string,
  onLogout: PropTypes.bool,

};
export default NavBar;
