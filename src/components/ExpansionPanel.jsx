import React from 'react';
import PropTypes from 'Prop-Types';

function ExpansionPanel(props) {
  console.log(props);

  function handleFilterCategory(e){
    props.onFilterCategory(e.target.value);
    console.log(e.target.value);
  }
  let dropDownStyle = {
  width: "75%",
  margin: "0 auto",
  background: "#0000008c",
  padding: "10px",
  border: "2px solid black",
  textAlign: "left"
  }

  let inlineBlockStyle = {
    display: "inline-block",
    margin: "0",
    fontSize: "14px"
  }

  return (
    <div style={dropDownStyle}>
      <button className="buttonStyle" variant="contained" value="title" onClick={handleFilterCategory}>Title</button>
      <button className="buttonStyle" variant="contained" value="type" onClick={handleFilterCategory}>Type</button>
      <button className="buttonStyle" variant="contained" value="city" onClick={handleFilterCategory}>City</button>
      <p style={inlineBlockStyle}>Filter Options</p>
        <style jsx>{`
          .buttonStyle {
              background: #601ac7;
              padding: 10px 17px;
              border-radius: 5px;
              margin-right: 10px;
              color: white;
              border: 1px solid #3f1084;
              font-weight: 700;
          }
          .buttonStyle:hover{
            background: #3e0e84;
            color:white;
          }
      `}</style>
    </div>
  )
}

ExpansionPanel.propTypes = {
  onFilterCategory: PropTypes.func
}

export default ExpansionPanel;
