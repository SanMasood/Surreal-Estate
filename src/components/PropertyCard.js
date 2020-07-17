import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PropertyCard.css';

const PropertyCard = ({
  _id, userId, title, type, city, bathrooms, bedrooms, price, onSaveProperty,
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

    <button className="email-button" type="submit">Email</button>
    {userId && (
    <button
      href="#"
      className="save-button"
      type="submit"
      onClick={() => onSaveProperty(_id)}

    >
      <i className="fas fa-star" />
      Save

    </button>
    )}

  </div>
);

PropertyCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  bathrooms: PropTypes.string,
  bedrooms: PropTypes.string,
  price: PropTypes.string,
  city: PropTypes.string,
  userId: PropTypes.string,
  _id: PropTypes.string,
  onSaveProperty: PropTypes.func,
};
export default PropertyCard;
