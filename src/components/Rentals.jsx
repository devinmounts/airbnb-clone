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
    return(
        <div style={rentalDiv}>
          {props.listings.map((listing, index) =>
            <Rental
              image = {listing.image}
              title = {listing.title}
              type = {listing.type}
              city = {listing.city}
              description = {listing.description}
              key ={index} />
          )}
        </div>
    );
}

Rentals.propTypes = {
  listings: PropTypes.array
}
//
// const RENTALS = [
//     {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
//     {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'}
// ];

export default Rentals;
