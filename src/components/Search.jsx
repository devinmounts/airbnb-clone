import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Search extends React.Component  {

  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterCategory = this.handleFilterCategory.bind(this);
    this.handleExpansionShow = this.handleExpansionShow.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleFilterCategory(e){
    this.props.onFilterCategory(e.target.value)
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

    return(
      <div style={searchDiv}>
        <h1 style={h1Style}>Book unique homes and experiences all over the world.</h1>
        <input style={inputStyle}
          onClick={this.handleExpansionShow}
          onChange={this.handleFilterTextChange}
          placeholder="Try homes in Mexico City"
        />
          <Button variant="contained" value="title" onClick={this.handleFilterCategory}>Title</Button>
          <Button variant="contained" value="type" onClick={this.handleFilterCategory}>Type</Button>
          <Button variant="contained" value="city" onClick={this.handleFilterCategory}>City</Button>
      </div>
    )
  }
}


export default Search;
