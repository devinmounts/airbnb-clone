import React from 'react';
import ExpansionPanel from './ExpansionPanel'


class Search extends React.Component  {

  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleExpansionShow = this.handleExpansionShow.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleExpansionShow(){
    this.props.onExpansionShow();
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
      display: 'block',
      width: '75%',
      margin: '0 auto',
      height: '40px',
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
    let showExpansion = null;
    if(this.props.expansionShow){
      showExpansion = <ExpansionPanel onFilterCategory={this.props.onFilterCategory}/>
    }

    return(
      <div style={searchDiv}>
        <h1 style={h1Style}>Book unique homes and experiences all over the world.</h1>
        <input style={inputStyle}
          onClick={this.handleExpansionShow}
          onChange={this.handleFilterTextChange}
          placeholder="Try homes in Mexico City"
        />
        {showExpansion}
      </div>
    );
  }
}


export default Search;
