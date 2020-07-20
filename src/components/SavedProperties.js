import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import SavedPropertyCard from './SavedPropertyCard';

const SavedProperties = ({ userId }) => {
  const initialState = {
    savedProperties: [],
    alert: {
      message: '',
    },
  };

  const [savedProperties, setSavedProperties] = useState(initialState.savedProperties);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userId}"}&populate=propertyListing`)
      .then((response) => {
        console.log(response.data);
        setSavedProperties(response.data);

        //console.log(userId);
      })

      .catch((err) => console.log(err));
  }, [userId]);

  const handleRemoveProperty = (propertyId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${propertyId}`)

      .then((deleteresponse) => {
          console.log(deleteresponse.data);
        axios
          .get(`http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userId}"}&populate=propertyListing`)

          .then((getresponse) => {
            setSavedProperties(getresponse.data);
            console.log(getresponse.data);
            
          })
          .catch((err) => console.log(err));
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className="saved-properties">
      <h2>Saved Properties</h2>

      <div className="saved-properties-list">
        {savedProperties.map((savedproperty) => (

          <SavedPropertyCard
            key={savedproperty._id}
            {...savedproperty}
            title={savedproperty.title}
            onRemoveProperty={handleRemoveProperty}
          />

        ))}
      </div>

    </div>
  );
};

SavedProperties.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default SavedProperties;
