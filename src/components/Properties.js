import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: '',
    },
  };

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);
  // setAlert({ message: '' });

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/Propertyisting')
      .then((response) => { setProperties(response.data); })
      .catch(({ message }) => { setAlert({ message: 'Error retrieving properties!' }); });
  }, []);

  return (
    <div>
      Properties Page
      <br />
      <div className="properties-alert"><Alert message={alert.message} /></div>
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
