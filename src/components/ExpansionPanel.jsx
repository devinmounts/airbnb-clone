import React from 'react';
import PropTypes from 'Prop-Types';

function ExpansionPanel(props) {

  return (
    <div>
      <button variant="contained" value="title" onClick={this.handleFilterCategory}>Title</button>
      <button variant="contained" value="type" onClick={this.handleFilterCategory}>Type</button>
      <button variant="contained" value="city" onClick={this.handleFilterCategory}>City</button>
    </div>
  )
}

ExpansionPanel.propTypes = {
  onFilterCategory: PropTypes.func
}

export default ExpansionPanel;
