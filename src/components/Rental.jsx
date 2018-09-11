import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

function Rental(props) {
  let listingDiv = {
    width:'23%',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '2%',
    marginTop: '2rem'
  };

  let imageStyling = {
    maxWidth:'100%',
    borderRadius: '3px'
  };

  function handleLike(likedId, check){
    props.onUpdateLikes(likedId, check);
  }

  return(
    <div style={listingDiv}>
      <img style={imageStyling} src={props.image} />
      <p><b>{props.type} • {props.city}</b></p>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.likes}</p>
      <Button onClick={() => handleLike(props.id, 'true')}>
        <ThumbUp />
      </Button>
      <Button onClick={() => handleLike(props.id, 'false')}>
        <ThumbDown />
      </Button>
    </div>
  );
}

Rental.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string,
  type:PropTypes.string,
  city:PropTypes.string,
  description:PropTypes.string,
  likes:PropTypes.number,
  id:PropTypes.string,
  onUpdateLikes:PropTypes.func
};

export default Rental;
