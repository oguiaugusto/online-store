/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components';
import { CategoriesList } from '../components/Home';
import { Context } from '../ContextAPI';

const Home = () => {
  const {
    searchProducts,
    products,
    setQuery,
    setProductsFromCategory,
  } = useContext(Context);
  const { query, categoryId } = useParams();

  useEffect(() => {
    if (query) {
      setQuery(query);
      searchProducts(query);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (categoryId) {
      setQuery('');
      setProductsFromCategory(categoryId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return (
    <div className="home-page">
      <CategoriesList />
      <div className="products">
        {
          products.length === 0 ? (
            <p data-testid="home-initial-message" className="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : null
        }
        {
          products.map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
    </div>
  );
};

export default Home;
