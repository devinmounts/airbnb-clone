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

    console.log(props.onUpdateLikes)
    console.log(props.listings[props.listings.length-1].id)

    return(
        <div style={rentalDiv}>
          {props.listings.map((listing) =>
            <Rental
              image = {listing.image}
              title = {listing.title}
              type = {listing.type}
              city = {listing.city}
              description = {listing.description}
              likes = {listing.likes}
              key = {listing.id}
              id = {listing.id}
              onUpdateLikes={props.onUpdateLikes}/>
          )}
        </div>
    );
}

Rentals.propTypes = {
  listings: PropTypes.array,
  onUpdateLikes: PropTypes.func
}

export default Rentals;
