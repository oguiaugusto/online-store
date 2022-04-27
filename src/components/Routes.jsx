/* eslint-disable import/no-cycle */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Routes = () => (
  <Switch>
    <Route path="/produto/:id" component={ Product } />
    <Route path="/categoria/:categoryId" component={ Home } />
    <Route path="/:query" component={ Home } />
    <Route exact path="/" component={ Home } />
    <Route exact path="/carrinho" component={ Cart } />
  </Switch>
);

export default Routes;
