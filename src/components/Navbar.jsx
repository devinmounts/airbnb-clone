import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  let imageStyle = {
    width: '40px'
  };
  let imageDiv = {
    display: 'inline-block',
    marginLeft: "10px",
    marginTop: "10px"
  };
  let linksDiv = {
    display: 'inline-block',
    float: 'right',
    minWidth: '60%',
    textAlign: 'right'
  };
  let linkEl ={
    display: 'inline-block',
    margin: '3%',
    color: 'white'
  };
  let navDiv = {
    position: 'fixed',
    width: '100%',
    height: '75px',
    background: '#ffffff21'
  };


  return(
    <div style={navDiv}>
      <div style={imageDiv}>
        <img style={imageStyle} src="https://cdn.iconscout.com/icon/free/png-512/airbnb-7-532110.png"/>
      </div>
      <div style={linksDiv}>
        <h5 className="linkStyle">Become A Host</h5>
        <h5 className="linkStyle">Earn Credit</h5>
        <h5 className="linkStyle">Help</h5>
        <Link to='/newlisting'><h5 className="linkStyle">New Listing</h5></Link>
        <Link to='/admin'><h5 className="linkStyle">Admin</h5></Link>
          <style jsx>{`
            .linkStyle {
                display: inline-block;
                margin: 3%;
                padding-bottom: 5px;
                color: white;
            }
            .linkStyle:hover{
              border-bottom: 3px solid white;
            }
        `}</style>
      </div>
    </div>

  );
}

export default NavBar;
