import React, { useState } from 'react';
import Alert from './Alert';
import '../styles/AddProperty.css';

const axios = require('axios');

const AddProperty = () => {
  const initialState = {
    fields: {
      title: '',
      city: 'Manchester',
      type: 'flat',
      bedrooms: '1',
      email: '',
      price: '<£50,000',
      bathrooms: '1',

      alert: {
        message: '',
        isSuccess: false,
      },

    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', isSuccess: false });
    console.log(fields);// axios request

    axios.post('http://localhost:4000/api/v1/PropertyListing',
      { ...fields })
      .then((response) => {
        setAlert({ message: 'New Property Created!', isSuccess: true });
        console.log(response.data);
      })
      .catch((error) => {
        setAlert({ message: 'Error creating new property', isSuccess: false });
        console.log(error);
      });
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (

    <div className="addProperty">
      <h2>Add a Property</h2>
      <Alert message={alert.message} success={alert.success} />

      <form onSubmit={handleAddProperty}>

        <div className="title">
          <label htmlFor="title" className="title-label">
            Title:
            <br />
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="email">
          <label htmlFor="email">
            Email:
            {' '}
            <br />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>

        <div className="city">
          <label htmlFor="city">
            Choose City:

            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >

              <option value="Manchester">Manchester</option>

              <option value="Leeds">Leeds</option>

              <option value="Sheffield">Sheffield</option>

              <option value="Liverpool">Liverpool</option>

            </select>
          </label>
        </div>

        <div className="type">
          <label htmlFor="type">
            Choose a type:

            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >

              <option value="flat">Flat</option>

              <option value="detached">Detached</option>

              <option value="semi-detached">Semi-Detached</option>

              <option value="end-of-terrace">End-Of-Terrace</option>

              <option value="cottage">Cottage</option>

              <option value="bungalow">Bungalow</option>

            </select>
          </label>
        </div>

        <div className="bedrooms">
          <label htmlFor="bedrooms">
            Number of bedrooms:

            <select
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >

              <option value="1">1</option>

              <option value="2">2</option>

              <option value="3">3</option>

              <option value="4">4</option>

              <option value="5">5</option>

              <option value="6">6</option>

            </select>
          </label>
        </div>

        <div className="bathrooms">
          <label htmlFor="bathrooms">
            Number of bathrooms:

            <select
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >

              <option value="1">1</option>

              <option value="2">2</option>

              <option value="3">3</option>

              <option value="4">4</option>

              <option value="5">5</option>

              <option value="6">6</option>

            </select>
          </label>
        </div>

        <div className="price">

          <label htmlFor="price">
            Price range:

            <select
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            >

              <option value="1">&#60;£ 50,000</option>

              <option value="2">£50,000-£100,000</option>

              <option value="3">£100,000-£150,000</option>

              <option value="4">£150,000-£200,000</option>

              <option value="5">£200,000-£250,000</option>

              <option value="6">£250,000 +</option>

            </select>
          </label>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
