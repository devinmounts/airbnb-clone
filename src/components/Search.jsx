import React from 'react';

class Search extends React.Component  {

  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }


  render(){

      let searchDiv = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        width: '100%',
        fontSize: '24px',
        fontWeight: '700',
        textAlign: 'center'
      };

      let inputStyle ={
        width: '75%',
        margin: '0 auto',
        height: '40px',
        WebkitBoxShadow: '0px 0px 75px 1px rgba(0,0,0,0.75)',
        MozBoxShadow: '0px 0px 75px 1px rgba(0,0,0,0.75)',
        boxShadow: '0px 0px 75px 1px rgba(0,0,0,0.75)',
        borderRadius: '2px',
        fontWeight: '700',
        fontSize: '20px',
        padding: '10px',
        marginTop: '20px'
      };

      let h1Style = {
        width: '75%',
        margin: '0 auto',
        textAlign: 'left'
      };
    return(
      <div style={searchDiv}>
        <h1 style={h1Style}>Book unique homes and experiences all over the world.</h1>
        <input value={this.props.filterText} onChange={this.handleFilterTextChange} style={inputStyle} placeholder="Try homes in Mexico City"/>
      </div>
    );
  }
}


export default Search;
