import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Rentals from './Rentals';
import Home from './Home';
import Admin from './Admin';
import NewListingControl from './NewListingControl';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterListingsList: {
        '01': {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23d', likes:0, complaints: "The bed smelled like cat pee"},
        '02': {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23a', likes:0, complaints: "The shower had only cold water" },
        '03': {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23v', likes:0, complaints: "There was a little furry man standing outside the house"},
        '04': {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23w', likes:0, complaints: "I hurt my toe on the door jam"},
        '05': {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23ds', likes:0, complaints: "This sucks"},
        '06': {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23daa', likes:0, complaints: "Your mom kept calling the house"},
        '07': {image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg?aki_policy=large', title: 'Off-grid itHouse', type:'Entire House', city: 'PioneerTown', description: 'From $400 per night · Free cancellation 212 reviews', key: '23daad', likes:0, complaints: "The carpet is too shaggy"},
        '08': {image: 'https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large', title: 'Underground Hygge', type:'Earth House', city: 'Orondo', description: 'From $400 per night · Free cancellation 379 reviews', key: '23dssd', likes:0, complaints: "There was a lizard in my cup"}
      },
      filterText: '',
      filterCategory: null,
      expansionShow: false,
      selectedListing: null
    };
    this.handleAddingNewListing = this.handleAddingNewListing.bind(this);
    this.handleUpdatingLikes = this.handleUpdatingLikes.bind(this);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFilterCategory = this.handleFilterCategory.bind(this);
    this.handleExpansionShow = this.handleExpansionShow.bind(this);
    this.handleChangeSelectedListing = this.handleChangeSelectedListing.bind(this);
  }

  handleAddingNewListing(newListing) {
    var newListingId = v4();
    let newMasterListingList = Object.assign({}, this.state.masterListingsList, {
      [newListingId]: newListing
    });
    this.setState({masterListingsList: newMasterListingList});
  }

  handleUpdatingLikes(likeId, check) {
    console.log(likeId)
    let masterListingList = this.state.masterListingsList.slice();
    let updatedMasterListingList = [];
    masterListingList.forEach(function(listing){
      console.log(listing.id)
      if(listing.id === likeId && check == 'true'){
        let foundListing = listing;
        foundListing.likes ++;
        updatedMasterListingList.push(foundListing);
      } else if (listing.id === likeId && check == 'false'){
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
    this.setState({filterText: filterText});
  }

  handleFilterCategory(filterCategory) {
    this.setState({filterCategory: filterCategory});
  }

  handleExpansionShow(){
    this.setState( prevState => ({
      expansionShow: !prevState.expansionShow}));
  }

  handleChangeSelectedListing(listing) {
    this.setState({selectedListing: listing});
  }

  render(){
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' render={()=>
            <Home listingsList={this.state.masterListingsList}
              onUpdateLikes={this.handleUpdatingLikes}
              onFilterTextChange={this.handleFilterTextChange}
              filterText={this.state.filterText}
              onFilterCategory={this.handleFilterCategory}
              filterCategory={this.state.filterCategory}
              onExpansionShow={this.handleExpansionShow}
              expansionShow={this.state.expansionShow}/>}
          />
          <Route  path='/newlisting' render={()=>
            <NewListingControl onNewListingCreation={this.handleAddingNewListing} />}
          />
        <Route path='/admin' render={(props) =>
            <Admin listings={this.state.masterListingsList}
              onUpdateLikes={this.handleUpdatingLikes}
              filterText={this.state.filterText}
              filterCategory={this.state.filterCategory}
              currentRouterPath={props.location.pathname}
              onChangeSelectedListing={this.handleChangeSelectedListing}
              selectedListing={this.state.selectedListing}
              />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
