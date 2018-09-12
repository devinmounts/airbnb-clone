import React from 'react';
import PropTypes from 'Prop-Types';

function ExpansionPanel(props) {
  console.log(props);

  function handleFilterCategory(e){
    props.onFilterCategory(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <button variant="contained" value="title" onClick={handleFilterCategory}>Title</button>
      <button variant="contained" value="type" onClick={handleFilterCategory}>Type</button>
      <button variant="contained" value="city" onClick={handleFilterCategory}>City</button>
    </div>
  )
}

ExpansionPanel.propTypes = {
  onFilterCategory: PropTypes.func
}

export default ExpansionPanel;
