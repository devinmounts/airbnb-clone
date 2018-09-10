import React from 'react';
import Rental from './Rental';
import PropTypes from 'prop-types';

function Rentals (props) {
    let rentalDiv = {
        minHeight: '800px',
        width: '75%',
        margin: '0 auto',
        backgroungColor: 'satin'
    };

    console.log(props.listings)
    return(
        <div style={rentalDiv}>
          {props.listings.map((listing) =>
            <Rental
              image = {listing.image}
              title = {listing.title}
              type = {listing.type}
              city = {listing.city}
              description = {listing.description}
              key ={listing.id} />
          )}
        </div>
    );
}

Rentals.propTypes = {
  listings: PropTypes.array
}

export default Rentals;
