/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { CategoriesList, ProductCard } from '../components/Home';
import { Context } from '../ContextAPI';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Home = () => {
  const {
    searchProducts,
    products,
    setProducts,
    setQuery,
    setProductsFromCategory,
    loading,
  } = useContext(Context);
  const { query, categoryId } = useParams();

  useEffect(() => {
    if (query) {
      setQuery(query);
      searchProducts(query);
    } else {
      setQuery('');
      setProducts([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (categoryId) {
      setQuery('');
      setProductsFromCategory(categoryId);
    } else {
      setQuery('');
      setProducts([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  return (
    <div className="home-page">
      <CategoriesList />
      <div className="products">
        {
          loading ? (
            <Loader type="ThreeDots" color="#252525" height={ 25 } width={ 25 } />
          ) : (
            <>
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
            </>
          )
        }
      </div>
    </div>
  );
};

export default Home;
