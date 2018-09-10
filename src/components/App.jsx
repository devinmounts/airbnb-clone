import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Rentals from './Rentals';
import Home from './Home';
import NewListingControl from './NewListingControl';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterListingsList: [
           {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews'},
           {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews'}
       ]
    };
    this.handleAddingNewListing = this.handleAddingNewListing.bind(this);
  }

  handleAddingNewListing(newListing) {
    let newMasterListingList = this.state.masterListingsList.slice();
    newMasterListingList.push(newListing);
    this.setState({masterListingsList: newMasterListingList})
  }
  render(){
    return (
        <div>
          <NavBar/>
          <Switch>
              <Route exact path='/' render={()=> <Home listingsList={this.state.masterListingsList} />} />
              <Route  path='/newlisting' render={()=><NewListingControl onNewListingCreation={this.handleAddingNewListing} />} />
          </Switch>
        </div>
    );
  }
}

export default App;
