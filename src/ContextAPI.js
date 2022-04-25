import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as api from './services/api';

export const Context = createContext();

const Provider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    api.getCategories().then((r) => setCategories(r));
  }, []);

  const searchProducts = (incomingQuery) => {
    api.getProductsFromQuery(incomingQuery).then((r) => setProducts(r.results));
  };

  const value = {
    query,
    setQuery,

    categories,
    products,

    searchProducts,
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
