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

    const filterText = props.filterText;
    const list = [];


      let mappedListings = props.listings.map((el, i) => {
        return { index: i, value: el};
      });

      mappedListings.sort((a,b) => {
        if (a.value.likes < b.value.likes) {
          return 1;
        }
        if (a.value.likes > b.value.likes) {
          return -1;
        }
        return 0;
      });
      let resultingList = mappedListings.map((el) => {
        return props.listings[el.index];
      });

      resultingList.forEach((listing) =>{
        if (filterText !== null){
          if(listing.city.indexOf(filterText) === -1) {
            return;
          }
            list.push(listing);
        } else {
          list.push(listing);
        }
      });


    return(
        <div style={rentalDiv}>
          {list.map((listing) =>
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
