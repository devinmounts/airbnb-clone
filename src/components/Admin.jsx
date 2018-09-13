import React from 'react';
import PropTypes from 'prop-types';
import Rentals from './rentals';
import ListingDetail from './ListingDetail';

function Admin(props){
  let optionalSelectedListingContent = null;
  if(props.selectedListing != null){
    optionalSelectedListingContent = <ListingDetail selectedListing={props.selectedListing}/>
  }

  let containerStyle = {
    maxWidth: '1200px',
    margin: '2rem auto',


  }
  return (
    <div style={containerStyle}>
      <h2>Admin</h2>
      {optionalSelectedListingContent}
      <Rentals
        currentRouterPath={props.currentRouterPath}
        listings={props.listings}
        onUpdateLikes={props.onUpdateLikes}
        filterText={props.filterText}
        filterCategory={props.filterCategory}
        onChangeSelectedListing={props.onChangeSelectedListing}/>
    </div>
  );
}

Admin.propTypes = {
  listings: PropTypes.object,
  onUpdateLikes: PropTypes.func,
  filterText: PropTypes.string,
  filterCategory: PropTypes.string,
  currentRouterPath: PropTypes.string.isRequired,
  onChangeSelectedListing: PropTypes.func,
};

export default Admin;
