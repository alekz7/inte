import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/restaurants/Home';
import {Add as AddRestaurant } from './components/restaurants/Add';
import {Edit as EditRestaurant} from './components/restaurants/Edit';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth:'30rem', margin:'4rem auto'}}>
      <GlobalProvider>      
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/addRestaurant' component={AddRestaurant}></Route>
            <Route path='/editRestaurant/:id' component={EditRestaurant}></Route>
          </Switch>
        </Router>      
      </GlobalProvider>
    </div>
  );
}

export default App;
