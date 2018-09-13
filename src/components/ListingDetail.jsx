import React from 'react';
import PropTypes from 'prop-types';

function ListingDetail(props){
  return (
    <div>
      <h2>THIS IS ADMIN DETAILS</h2>
      <h4><em>{props.selectedListing.complaints}</em></h4>
    </div>
  );
}

ListingDetail.propTypes = {
  selectedListing: PropTypes.object
};

export default ListingDetail;
