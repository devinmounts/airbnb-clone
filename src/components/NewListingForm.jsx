import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewListingForm(props){
  let _type = null;
  let _city = null;
  let _title = null;
  let _description = null;
  let _image = null;

  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  };

  function handleAddingNewListing(event){
    event.preventDefault();
    props.onNewListingCreation({
      type: _type.value,
      city: _city.value,
      title: _title.value,
      description: _description.value,
      image: _image.value,
      likes: 0,
      id: v4()
    });
    _type.value = '';
    _city.value = '';
    _title.value = '';
    _description.value = '';
    _image.value = '';
  }
  return(
    <div style={formDiv}>
      <a href="/#">Back to home</a>
      <form onSubmit={handleAddingNewListing}>
        <input
          type='text'
          id='type'
          value='Test'
          placeholder='Type of Rental'
          ref = {(input) =>{_type = input;}}/>
        <input
          type='text'
          id='city'
          value='Test'
          placeholder='Location'
          ref = {(input) =>{_city = input;}}/>
        <input
          type='text'
          id='title'
          value='Test'
          placeholder='Title'
          ref = {(input) =>{_title = input;}}/>
        <input
          type='text'
          id='description'
          value='Test'
          placeholder='Description'
          ref = {(input) =>{_description = input;}}/>
        <input
          type='text'
          id='image'
          value='https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426'
          placeholder='Image URL'
          ref = {(input) =>{_image = input;}}/>
        <button type='submit'>Create New Listing</button>
      </form>
    </div>
  );
}

NewListingForm.propTypes = {
  onNewListingCreation: PropTypes.func
};

export default NewListingForm;
