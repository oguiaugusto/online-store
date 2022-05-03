import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as api from './services/api';

export const Context = createContext();

const Provider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const [cartProducts, setCartProducts] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    api.getCategories().then((r) => setCategories(r));

    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (Array.isArray(storedCartProducts)) setCartProducts(storedCartProducts);

    const storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));
    if (Array.isArray(storedFeedbacks)) setFeedbacks(storedFeedbacks);
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      setLoading(false);
    }
  }, [products]);

  const searchProducts = (incomingQuery) => {
    setLoading(true);
    api.getProductsFromQuery(incomingQuery).then((r) => setProducts(r.results));
  };

  const setProductsFromCategory = (categoryId) => {
    setLoading(true);
    api.getProductsFromCategory(categoryId).then((r) => setProducts(r.results));
  };

  const addToCart = ({ id, title, price, thumbnail, availableQuantity }) => {
    const existingItem = cartProducts.find((p) => p.id === id);
    if (existingItem) {
      existingItem.amount += 1;
      existingItem.availableQuantity = availableQuantity;
      const newCart = cartProducts.map((p) => (p.id === id ? existingItem : p));

      setCartProducts(newCart);
      localStorage.setItem('cartProducts', JSON.stringify(newCart));
    } else {
      const newCart = [
        ...cartProducts,
        { id, title, price, thumbnail, availableQuantity, amount: 1 },
      ];

      setCartProducts(newCart);
      localStorage.setItem('cartProducts', JSON.stringify(newCart));
    }
  };

  const subtractFromCart = (id) => {
    const item = cartProducts.find((p) => p.id === id);

    if (item.amount !== 1) {
      item.amount -= 1;
      item.availableQuantity += 1;
      const newCart = cartProducts.map((p) => (p.id === id ? item : p));

      setCartProducts(newCart);
      localStorage.setItem('cartProducts', JSON.stringify(newCart));
    }
  };

  const removeFromCart = (id) => {
    const newCart = cartProducts.filter((p) => p.id !== id);

    localStorage.setItem('cartProducts', JSON.stringify(newCart));
    setCartProducts(newCart);
  };

  const addFeedback = ({ id, email, stars, message }) => {
    const newFeedback = [...feedbacks, { id, email, stars, message }];

    setFeedbacks(newFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(newFeedback));
  };

  const value = {
    query,
    setQuery,

    categories,
    products,
    setProducts,

    searchProducts,
    setProductsFromCategory,

    loading,
    setLoading,

    cartProducts,
    addToCart,
    subtractFromCart,
    removeFromCart,

    feedbacks,
    addFeedback,
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
