import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import '../styles/App.css';
import Properties from './Properties';
import AddProperty from './AddProperty';
import SavedProperties from './SavedProperties';

function App() {
 
  const [userId, setUserId] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    //console.log(response);

    setUserId(response.id);
    // setIsLoggedIn(true);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserId(''));
    // setIsLoggedIn(false);
  };

  return (

    <div className="App">
      <header className="App-header" />

      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />

      <Switch>
        <Route
          exact
          path="/"
          //component={Properties}
          render={(props) => (
            <Properties {...props} userId={userId} />)}
        />
        <Route exact path="/add-property" component={AddProperty} />

        <Route
          exact
          path="/saved-properties"
          render={(props) => <SavedProperties {...props} userId={userId} />}
        />

      </Switch>

    </div>

  );
}

export default App;
