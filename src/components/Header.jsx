import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Context } from '../ContextAPI';

const Header = () => {
  const history = useHistory();
  const { query, setQuery } = useContext(Context);

  return (
    <header className="header">
      <div
        className="header-logo"
        style={ { width: '120px', height: '50px', backgroundColor: 'red' } }
      />
      <div className="search-bar">
        <input
          data-testid="query-input"
          type="text"
          value={ query }
          onChange={ ({ target: { value } }) => setQuery(value) }
          onKeyDown={ ({ key }) => {
            if (key === 'Enter') {
              history.push(`/${query}`);
            }
          } }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => {
            history.push(`/${query}`);
          } }
        >
          <FiSearch size={ 20 } />
        </button>
      </div>
      <div className="header-icons">
        <button
          type="button"
          data-testid="shopping-cart-button"
          className="cart-icon"
          onClick={ () => history.push('/carrinho') }
        >
          <AiOutlineShoppingCart size={ 35 } />
        </button>
      </div>
    </header>
  );
};

export default Header;
