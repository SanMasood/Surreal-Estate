import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/SideBar.css';

const SideBar = () => (
  /* <div className="sidebar">
    <div className="filter-by-city">
      Filter By City:
      <a href="#">Leeds</a>
      <a href="#">Manchester</a>
      <a href="#">Liverpool</a>
      <a href="#">Sheffield</a>
    </div>
  </div> */
  <div>

    <ul className="sidebar-links">
      <h3>Filter By City:</h3>

      <li className="sidebar-links-item">
        <Link to={`/?query={"city":"Manchester"}`} className="manc-link">
          Manchester
        </Link>
      </li>

      <li className="sidebar-links-item">
        <Link to={`/?query={"city":"Leeds"}`} className="leeds-link">
          Leeds
        </Link>
      </li>
      <li className="sidebar-links-item">
        <Link to={`/?query={"city":"Liverpool"}`} className="liverpool-link">
          Liverpool
        </Link>
      </li>
      <li className="sidebar-links-item">
        <Link to={`/?query={"city":"Sheffield"}`} className="sheffield-link">
          Sheffield
        </Link>
      </li>

    </ul>
  </div>

);

export default SideBar;
