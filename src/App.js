import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Games from './components/games/games';
import Profile from './components/profile/profile';
import FullDescriptionGame from './components/fullDescriptionGame/fullDescriptionGame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route component={Games} exact path="/" />
          <Route component={Profile} path="/profile" />
          <Route component={FullDescriptionGame} path="/game/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
