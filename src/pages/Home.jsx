import React from 'react';
import { CategoriesList } from '../components/Home';

const Home = () => (
  <div className="home-page">
    <CategoriesList />
    <div className="products">
      <p data-testid="home-initial-message" className="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </div>
  </div>
);

export default Home;
