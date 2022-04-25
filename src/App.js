import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './ContextAPI';
import { Routes, Header } from './components';

const App = () => (
  <Router>
    <Provider>
      <Header />
      <Routes />
    </Provider>
  </Router>
);

export default App;
