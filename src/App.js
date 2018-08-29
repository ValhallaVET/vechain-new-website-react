import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './scenes/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default App;
