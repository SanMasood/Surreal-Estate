import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import '../styles/App.css';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Alert from './Alert';
import PropertyCard from './PropertyCard';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header" />

      <NavBar />

      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />

      </Switch>
      <PropertyCard />

    </div>
  );
}

export default App;
