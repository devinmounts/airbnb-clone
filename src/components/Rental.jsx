import React from 'react';
import PropTypes from 'prop-types';

function Rental(listing) {
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
    return(
        <div style={listingDiv}>
            <img style={imageStyling} src={listing.image} />
            <p><b>{listing.type} • {listing.city}</b></p>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
        </div>
    );
}

Rental.propTypes = {
    image:PropTypes.string,
    title:PropTypes.string,
    type:PropTypes.string,
    city:PropTypes.string,
    description:PropTypes.string,
};

export default Rental;
