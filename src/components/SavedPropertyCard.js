import React from 'react';
import PropTypes from 'prop-types';

const SavedPropertyCard = ({
  _id, propertyListing: { title }, fbUserId, onRemoveProperty,
}) => (

  <div className="saved-property-card">
    Title:
    {title}
    <button
      className="remove-button"
      type="button"
      onClick={() => onRemoveProperty(_id)}

    >
      Remove
    </button>
  </div>

);

SavedPropertyCard.propTypes = {

  _id: PropTypes.string,
  propertyListing: PropTypes.shape({
    title: PropTypes.string,
  }),
  fbUserId: PropTypes.string,
  onRemoveProperty: PropTypes.func,

};

export default SavedPropertyCard;
