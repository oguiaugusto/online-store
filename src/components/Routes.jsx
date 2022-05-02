/* eslint-disable import/no-cycle */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Routes = () => (
  <ScrollToTop>
    <Switch>
      <Route path="/produto/:id" component={ Product } />
      <Route exact path="/carrinho" component={ Cart } />
      <Route path="/categoria/:categoryId" component={ Home } />
      <Route path="/:query" component={ Home } />
      <Route exact path="/" component={ Home } />
    </Switch>
  </ScrollToTop>
);

export default Routes;
