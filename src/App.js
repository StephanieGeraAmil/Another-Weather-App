
import './App.css';
import CityList from './components/CityList.js';
import React, { useState, useEffect } from 'react';

import { Search } from './components/Search';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Forecast } from './components/Forecast';
import {Main} from './components/Main'

function App() {
  const [cities, setCities] = useState([])

  return (
    <GlobalProvider> 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route
             path="/forecast/:id" component={Forecast} />
        </Switch>
      </BrowserRouter>  
    </GlobalProvider>
  );
}

export default App;
