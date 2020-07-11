import React from 'react';
import qs from 'qs';
import { Link, useLocation } from 'react-router-dom';

import '../styles/SideBar.css';

const SideBar = () => {
    const { search } = useLocation();

    const buildQueryString = (operation, valueObj) => {
    

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  return (

    <div className="sidebar">

      <ul className="sidebar-links">
        <h3>Filter By City:</h3>

        <li className="sidebar-links-item">
          <Link to={'/?query={"city":"Manchester"}'} className="manc-link">
            Manchester
          </Link>
        </li>

        <li className="sidebar-links-item">
          <Link to={'/?query={"city":"Leeds"}'} className="leeds-link">
            Leeds
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={'/?query={"city":"Liverpool"}'} className="liverpool-link">
            Liverpool
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={'/?query={"city":"Sheffield"}'} className="sheffield-link">
            Sheffield
          </Link>
        </li>

        <div className="sorting-links">
          <h3>Sort By Price:</h3>

          <li className="sidebar-links-item">
            <Link to={buildQueryString('sort', { price: +1 })} className="asc-link">
              Ascending
            </Link>
          </li>

          <li className="sidebar-links-item">
            <Link to={buildQueryString('sort', { price: -1 })} className="desc-link">
              Descending
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
