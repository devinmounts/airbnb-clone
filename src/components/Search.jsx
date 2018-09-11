import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';

class Search extends React.Component  {

  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterCategory = this.handleFilterCategory.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  handleFilterCategory(e){
    this.props.onFilterCategory(e.target.value)
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
        width: '100%',
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
      const theme = createMuiTheme({
        palette: {
          primary: green,
        },
      });

    return(
      <div style={searchDiv}>
        <h1 style={h1Style}>Book unique homes and experiences all over the world.</h1>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography><input style={inputStyle} onChange={this.handleFilterTextChange}  placeholder="Try homes in Mexico City"/></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <MuiThemeProvider theme={theme}>
                <Button variant="contained" value="title" color="primary" onClick={this.handleFilterCategory}>
                  Title
                </Button>
              </MuiThemeProvider>
              <MuiThemeProvider theme={theme}>
                <Button variant="contained" value="type" color="primary" onClick={this.handleFilterCategory}>
                  Type
                </Button>
              </MuiThemeProvider>
              <MuiThemeProvider theme={theme}>
                <Button variant="contained" value="city" color="primary" onClick={this.handleFilterCategory}>
                  City
                </Button>
              </MuiThemeProvider>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <style jsx global>{`
      .MuiPaper-root-04 {
      background-color: transparent;
      }
      .MuiPaper-elevation1-07 {
      box-shadow: none;
      }
      .MuiExpansionPanel-root-01:before {
      background-color: rgba(0, 0, 0, 0);
      }
      .MuiExpansionPanelSummary-content-035 > :last-child {
      width: 75%;
      margin: 0 auto;
      }
      .MuiCollapse-entered-066 {
        width: 75%;
        margin: 0 auto;
      }
      .MuiExpansionPanelSummary-content-035.MuiExpansionPanelSummary-expanded-032 {
        margin:12px 0 0;
      }
      .MuiExpansionPanel-expanded-02 {
        margin: 0;
      }
      .MuiCollapse-container-065{
        width: 75%;
        margin: 0px auto;
      }
      .MuiExpansionPanelDetails-root-069 {
        width: 30%;
        background: #00000078;
        margin-left: 3px;
      }
      .MuiButton-containedPrimary-082 {
        color: white;
        margin-top:10px;
        margin-right:10px;
      }
      .MuiButton-containedPrimary-082:active {
        background-color:black;
      }
      `}</style>
      </div>
    );
  }
}


export default Search;
