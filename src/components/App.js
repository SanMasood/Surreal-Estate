import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import '../styles/App.css';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  /* const initialState = {
    auth: false,
    name: '',
    picture: '',

    userID: "10157220117560069", //fields later?

  }; */
  const [userId, setUserId] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (response) => {
    console.log(response);

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

      </Switch>

    </div>

  );
}

export default App;
