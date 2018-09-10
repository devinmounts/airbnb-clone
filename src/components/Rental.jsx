import React from 'react';
import PropTypes from 'prop-types';

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

    function handleLike(likedId){
      props.onUpdateLikes(likedId);
    }

    return(
        <div style={listingDiv}>
            <img style={imageStyling} src={props.image} />
            <p><b>{props.type} • {props.city}</b></p>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.id}</p>
            <button onClick={() => handleLike(props.id)}>Like Me</button>
            <p>{props.likes}</p>
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
