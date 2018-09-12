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
    marginRight: '1%',
    marginTop: '2rem',
    border: '1px solid #c7c7c7',
    padding: '5px',
    borderRadius: '5px',
    WebkitBoxShadow: '0px 0px 18px 0px rgba(0,0,0,0.5)',
    MozBoxShadow: '0px 0px 18px 0px rgba(0,0,0,0.5)',
    boxShadow: '0px 0px 18px 0px rgba(0,0,0,0.5)'
  };

  let imageStyling = {
    maxWidth:'100%',
    borderRadius: '3px'
  };

  let textStyle = {
    padding: '0 7px',
  }

  let spanStyle = {
    marginRight: '10px',
    fontWeight: '700'
  }

  function handleLike(likedId, check){
    props.onUpdateLikes(likedId, check);
  }

  return(
    <div style={listingDiv}>
      <img style={imageStyling} src={props.image} />
      <div style={textStyle}>
        <p><b>{props.type} • {props.city}</b></p>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p><span style={spanStyle}>{props.likes}</span>
        <Button onClick={() => handleLike(props.id, 'true')}>
          <ThumbUp />
        </Button>
        <Button onClick={() => handleLike(props.id, 'false')}>
          <ThumbDown />
        </Button>
        </p>
      </div>
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
