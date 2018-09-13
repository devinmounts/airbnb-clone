import React from 'react';
import PropTypes from 'prop-types';
import Rentals from './rentals'

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <Rentals listings={props.listings} onUpdateLikes={props.onUpdateLikes} filterText={props.filterText} filterCategory={props.filterCategory}/>
    </div>
  );
}

Admin.propTypes = {
  listings: PropTypes.array,
  onUpdateLikes: PropTypes.func,
  filterText: PropTypes.string,
  filterCategory: PropTypes.string,
};

export default Admin;
