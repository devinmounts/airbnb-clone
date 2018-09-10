import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import Rentals from './Rentals';
import Home from './Home';
import NewListingControl from './NewListingControl';
import { Switch, Route } from 'react-router-dom';

function App () {
    return (
        <div>
          <NavBar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/newlisting' component={NewListingControl} />
          </Switch>
        </div>
    );
}

export default App;
