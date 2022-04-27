/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Context } from '../ContextAPI';
import { StyledHeader } from './styled';
import logo from '../images/header-logo.png';
import sunLogo from '../images/sun-logo.svg';

const Header = () => {
  const history = useHistory();
  const { query, setQuery } = useContext(Context);

  return (
    <StyledHeader>
      <div className="header-content">

        <div className="header-logo" onClick={ () => history.push('/') }>
          <img className="standart-logo" src={ logo } alt="online store logo" />
          <img className="smaller-logo" src={ sunLogo } alt="online store smaller logo" />
        </div>
        <div className="search-bar">
          <input
            data-testid="query-input"
            type="text"
            placeholder="Digite algo!"
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
            className="icon-btn"
            onClick={ () => {
              history.push(`/${query}`);
            } }
          >
            <FiSearch size={ 20 } color="#444444" />
          </button>
        </div>
        <div className="header-icons">
          <button
            type="button"
            data-testid="shopping-cart-button"
            className="cart-icon icon-btn"
            onClick={ () => history.push('/carrinho') }
          >
            <AiOutlineShoppingCart size={ 30 } color="#e9e9e9" />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
