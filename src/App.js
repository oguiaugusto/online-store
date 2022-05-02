import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './ContextAPI';
import { Routes, Header } from './components';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './styles/home.css';
import './styles/product.css';
import './styles/cart.css';
import './styles/checkout.css';

const App = () => (
  <Router>
    <Provider>
      <Header />
      <Routes />
    </Provider>
  </Router>
);

export default App;
