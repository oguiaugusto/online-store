import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as api from './services/api';

export const Context = createContext();

const Provider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then((r) => setCategories(r));
  }, []);

  const value = {
    categories,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
