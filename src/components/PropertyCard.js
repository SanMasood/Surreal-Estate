import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PropertyCard.css';

const PropertyCard = ({
  title, type, city, bathrooms, bedrooms, price,
}) => (
  <div className="property-card">
    <div className="property-card-title">
      Title:
      {title}
    </div>
    <div className="property-card-type">
      Type:
      {' '}
      {type}
    </div>
    <div className="property-card-city">
      City:
      {city}
    </div>
    <div className="property-card-bathrooms">
    
      Bathrooms:
      {bathrooms}
    </div>
    <div className="property-card-bedrooms">
      Bedrooms:
      {bedrooms}
    </div>
    <div className="property-card-price">
      Price: £
      {' '}
      {price}
    </div>

    <button className="email-button">Email</button>

  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.string,
  bedrooms: PropTypes.string,
  price: PropTypes.string,
  city: PropTypes.string,
};
export default PropertyCard;
