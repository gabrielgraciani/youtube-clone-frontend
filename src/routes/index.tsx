import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Account from '../pages/Account';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/account" component={Account} />
  </Switch>
);

export default Routes;
