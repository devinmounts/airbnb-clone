import React from 'react';
import Rental from "./Rental";

function Rentals () {
  let rentalDiv = {
    minHeight: "800px",
    width: "100%",
    backgroungColor: "satin"
  }
  return(
    <div style={rentalDiv}>
      <Rental/>
    </div>
  );
}

export default Rentals;
