import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Rentals from './Rentals';
import NewListingControl from './NewListingControl';
import PropTypes from 'prop-types';

function Home (props) {
  let welcomeDiv = {
    backgroundImage: 'url(\'http://www.livingcharm.com/wp-content/uploads/2017/01/cinque-stunning-italy-1600x1059.jpg\')',
    minHeight: '1200px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div>
      <div style={welcomeDiv}>
        <Search
          onFilterTextChange={props.onFilterTextChange}
          onFilterCategory={props.onFilterCategory}
          onExpansionShow={props.onExpansionShow}
          expansionShow={props.expansionShow}
        />
      </div>
      <div>
        <Rentals listings={props.listingsList} onUpdateLikes={props.onUpdateLikes} filterText={props.filterText} filterCategory={props.filterCategory}/>
      </div>
    </div>
  );
}

Home.propTypes = {
  listingsList: PropTypes.array,
  onUpdateLikes: PropTypes.func,
  onFilterTextChange: PropTypes.func,
  filterText: PropTypes.string,
  onFilterCategory: PropTypes.func,
  filterCategory: PropTypes.string,
  onExpansionShow: PropTypes.func,
  expansionShow: PropTypes.bool
};

export default Home;
