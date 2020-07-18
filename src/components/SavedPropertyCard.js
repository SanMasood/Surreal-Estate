import React from 'react';
import PropTypes from 'prop-types';

const SavedPropertyCard = ({_id, propertyListing: { title }, fbUserId}) => {
    
    return (
     

  <div className="saved-property-card">
    Title:
    {title}
    <button className="remove-button" type="button">Remove</button>
  </div>
        
);
}

SavedPropertyCard.propTypes = {
  
    _id: PropTypes.string,
    propertyListing: PropTypes.shape({
      title: PropTypes.string,
    }),
    fbUserId: PropTypes.string,

};

export default SavedPropertyCard;
