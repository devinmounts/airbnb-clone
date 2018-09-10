import React from 'react';
import PropTypes from 'prop-types';

function NewListingConfirmation(props){
    return(
        <div>
            <h4>Are you sure you want to contribute to higher rents?</h4>
            <button onClick={props.onNewListingConfirmation}>Yes!</button>
        </div>
    );
}

NewListingConfirmation.propTypes = {
    onNewListingConfirmation: PropTypes.func
};

export default NewListingConfirmation;
