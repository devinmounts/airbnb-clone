import React from 'react';
import Rental from './Rental';
import PropTypes from 'prop-types';

// class Rentals extends React.Component {
//
//   constructor(props){
//     super(props);
//
//     let mappedListings = props.listings.map((i, el) => {
//       return { index: i, value: el};
//     });
//
//     mappedListings.sort((a,b) => {
//       if (a.likes > b.likes) {
//         return 1;
//       }
//       if (a.likes < b.likes) {
//         return -1;
//       }
//       return 0;
//     });
//
//     let resultingList = mappedListings.map((el) => {
//       return el.index;
//     });
//     console.log(resultingList);
//   }
//
//   render(){
//
//
//
//     let rentalDiv = {
//       minHeight: '800px',
//       width: '75%',
//       margin: '0 auto',
//       backgroungColor: 'satin'
//     };
//     return(
//       <div style={rentalDiv}>
//         {this.resultingList.map((listing) =>
//           <Rental
//             image = {listing.image}
//             title = {listing.title}
//             type = {listing.type}
//             city = {listing.city}
//             description = {listing.description}
//             likes = {listing.likes}
//             key = {listing.id}
//             id = {listing.id}
//             onUpdateLikes={props.onUpdateLikes}/>
//         )}
//       </div>
//     );
//   }
//
//   // Rentals.propTypes = {
//   //   listings: PropTypes.array,
//   //   onUpdateLikes: PropTypes.func
//   // }
// }

// export default Rentals;

function Rentals (props) {
    let rentalDiv = {
        minHeight: '800px',
        width: '75%',
        margin: '0 auto',
        backgroungColor: 'satin'
    };

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
      console.log(resultingList);



    return(
        <div style={rentalDiv}>
          {resultingList.map((listing) =>
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
