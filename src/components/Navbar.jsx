import React from 'react';


function NavBar() {
  let imageStyle = {
    width: "40px"
  }
  let imageDiv = {
    display: "inline-block"
  }
  let linksDiv = {
    display: "inline-block",
    float: "right",
    minWidth: "60%",
    textAlign: "right"
  }
  let linkEl ={
    display: "inline-block",
    margin: "3%",
    color: "white"
  }
  let navDiv = {
    position: "fixed",
    width: "100%"
  }


  return(
    <div style={navDiv}>
      <div style={imageDiv}>
        <img style={imageStyle} src="https://cdn.iconscout.com/icon/free/png-512/airbnb-7-532110.png"/>
      </div>
      <div style={linksDiv}>
      <h5 style={linkEl}>Become A Host</h5>
      <h5 style={linkEl}>Earn Credit</h5>
      <h5 style={linkEl}>Help</h5>
      <h5 style={linkEl}>Sign Up</h5>
      <h5 style={linkEl}>Log in</h5>
      </div>
    </div>

  );
}

export default NavBar;
