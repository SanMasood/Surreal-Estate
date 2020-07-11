import React, { useState, useEffect, useLocation } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import '../styles/Properties.css';
import '../styles/SideBar.css';
import Alert from './Alert';
import SideBar from './SideBar';

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
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then((response) => { setProperties(response.data); })
      .catch(({ message }) => { setAlert({ message: 'Error retrieving properties!' }); });
  }, []);

  return (
   <div className="test">
       <SideBar />
    <div className="Properties">
       
       
      <h2>Properties Page</h2>
      <br />
      <div className="properties-alert"><Alert message={alert.message} /></div>
     
      {properties.map((property) => (
        <div key={property._id} className="col">
          <PropertyCard {...property} />
        </div>
      ))}
      
        
    </div>
    </div>
  );
};

export default Properties;
