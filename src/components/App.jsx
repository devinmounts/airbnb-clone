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
        {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23d', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23a', likes:0 },
        {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23v', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23w', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23ds', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23daa', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23daad', likes:0},
        {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23dssd', likes:0}
      ],
      filterText: ''
    };
    this.handleAddingNewListing = this.handleAddingNewListing.bind(this);
    this.handleUpdatingLikes = this.handleUpdatingLikes.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleAddingNewListing(newListing) {
    let newMasterListingList = this.state.masterListingsList.slice();
    newMasterListingList.push(newListing);
    this.setState({masterListingsList: newMasterListingList});
  }

  handleUpdatingLikes(likeId, check) {
    let masterListingList = this.state.masterListingsList.slice();
    let updatedMasterListingList = [];
    console.log(check);
    masterListingList.forEach(function(listing){
      if(listing.id == likeId && check == 'true'){
        let foundListing = listing;
        foundListing.likes ++;
        updatedMasterListingList.push(foundListing);
      } else if (listing.id == likeId && check == 'false'){
        let foundListing = listing;
        foundListing.likes --;
        updatedMasterListingList.push(foundListing);
      } else {
        updatedMasterListingList.push(listing);
      }
    });
    this.setState({masterListingsList: updatedMasterListingList});
  }

  handleFilterTextChange(filterText) {
    console.log(filterText);
    this.setState({filterText: filterText})
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={()=> <Home listingsList={this.state.masterListingsList} onUpdateLikes={this.handleUpdatingLikes} onFilterTextChange={this.handleFilterTextChange} filterText={this.state.filterText}/>} />
          <Route  path='/newlisting' render={()=><NewListingControl onNewListingCreation={this.handleAddingNewListing} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
