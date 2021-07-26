import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Pizzas from '../pages/Pizzas';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/pizzas" exact component={Pizzas} />
  </Switch>
);

export default Routes;