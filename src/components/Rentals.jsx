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
  const filterCategory = props.filterCategory;


    let mappedListings = Object.values(props.listings).map((el, i) => {
      console.log(el.city);
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
    return el.value;
  });



  resultingList.forEach((listing) =>{

    if (filterText !== null){
      if (filterCategory == 'city' || filterCategory == null) {
        if(listing.city.indexOf(filterText) === -1) {
          return;
        }
        list.push(listing);
      }
      if (filterCategory == 'title') {
        if(listing.title.indexOf(filterText) === -1) {
          return;
        }
        list.push(listing);
      }
      if (filterCategory == 'type') {
        if(listing.type.indexOf(filterText) === -1) {
          return;
        }
        list.push(listing);
      }
    }
    else {
      list.push(listing);
    }
    console.log(list);
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
          complaints = {listing.complaints}
          key = {listing.key}
          id = {listing.key}
          onUpdateLikes={props.onUpdateLikes}
          currentRouterPath={props.currentRouterPath}
          onChangeSelectedListing={props.onChangeSelectedListing}/>
      )}
    </div>
  );
}

Rentals.propTypes = {
  listings: PropTypes.object,
  onUpdateLikes: PropTypes.func,
  filterText: PropTypes.string,
  filterCategory: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onChangeSelectedListing: PropTypes.func
};

export default Rentals;
