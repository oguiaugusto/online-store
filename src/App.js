import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './ContextAPI';
import Routes from './components/Routes';

const App = () => (
  <Router>
    <Provider>
      <Routes />
    </Provider>
  </Router>
);

export default App;
