
import './App.css';
import CityList from './components/CityList.js';
import React, { useState, useEffect } from 'react';

import { Search } from './components/Search';
import { GlobalProvider } from './context/GlobalState';
import City from './components/City';


function App() {
  const [cities, setCities] = useState([])

  return (
    <GlobalProvider>
      <Search/>
       <City/>

    </GlobalProvider>
  );
}

export default App;
