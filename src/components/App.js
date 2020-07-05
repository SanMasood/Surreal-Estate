import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import '../styles/App.css';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Surreal Estate</h2>
      </header>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
