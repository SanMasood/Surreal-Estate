import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PropertyCard.css';

const PropertyCard = (props) => (
  <div className="property-card">
    <div className="title">
      Title:
      {props.title}
    </div>
    <div className="type">
      City:
      {props.type}
    </div>
    <div className="city">
      City:
      {props.city}
    </div>
    <div className="bathrooms">
      Bathrooms:
      {props.bathrooms}
    </div>
    <div className="bedrooms">
      Bedrooms:
      {props.bedrooms}
    </div>
    <div className="price">
      Price: £
      {props.price}
    </div>

    <button className="email-button">Email</button>

  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  price: PropTypes.string,
  city: PropTypes.string.isRequired,
};
export default PropertyCard;
