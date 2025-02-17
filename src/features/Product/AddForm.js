import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const AddForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct({ name, type, imageURL });
    setName('');
    setImageURL('');
    setType('');
  };

  return (
    <Fragment>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input 
            name="name" 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input 
            name="imageURL" 
            type="text" 
            id="imageURL" 
            value={imageURL} 
            onChange={(e) => setImageURL(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input 
            name="type" 
            type="text" 
            id="type" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
          />
        </div>

        <button type="submit">Add product</button>
      </form>
    </Fragment>
  );
};

AddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default AddForm;
