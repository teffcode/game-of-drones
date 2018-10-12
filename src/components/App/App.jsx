import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Game from '../Game/Game';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/game" component={Game}/>
          <Route path="/stadistics" component={Statistics}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
