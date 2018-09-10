import React from 'react';
import NewListingForm from './NewListingForm';
import NewListingConfirmation from './NewListingConfirmation';

class NewListingControl extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
        };
        this.handleListingConfirmation = this.handleListingConfirmation.bind(this);
    }

    handleListingConfirmation() {
        this.setState({formVisibleOnPage: true});
    }


    render(){
      let currentVisibleContent = null;
      if (this.state.formVisibleOnPage){
          currentVisibleContent = <NewListingForm onNewListingCreation={this.props.onNewListingCreation} />;
      }
      else {
          currentVisibleContent = <NewListingConfirmation onNewListingConfirmation={this.handleListingConfirmation}/>;
      }
      return (
          <div>
              {currentVisibleContent}
          </div>
      );
    }
}

export default NewListingControl;
