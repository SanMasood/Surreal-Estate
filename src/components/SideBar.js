import React, { useState } from 'react';
import qs from 'qs';
import { Link, useLocation, useHistory } from 'react-router-dom';

import '../styles/SideBar.css';

const SideBar = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState('');

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
          ...JSON.parse(currentQueryParams[operation] || '{}' ),
          ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryParams = buildQueryString('query', { title: { $regex: query } });
    history.push(newQueryParams);
    console.log(query);
  };

  return (

    <div className="sidebar">

      <ul className="sidebar-links">

        <form className="sidebar-form" onSubmit={handleSearch}>
          <input
            className="search-field"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}

          />
          <button type="submit">Search</button>
        </form>
        <h3>Filter By City:</h3>

        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Manchester' })} className="manc-link">
            Manchester
          </Link>
        </li>

        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Leeds' })} className="leeds-link">
            Leeds
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Liverpool' })} className="liverpool-link">
            Liverpool
          </Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={buildQueryString('query', { city: 'Sheffield' })}className="sheffield-link">
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
