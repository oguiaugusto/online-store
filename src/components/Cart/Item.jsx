/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoRemoveSharp, IoAddSharp } from 'react-icons/io5';
import { StyledCartItem } from '../styled';
import { Context } from '../../ContextAPI';

const Item = ({ product, checkout }) => {
  const { removeFromCart, addToCart, subtractFromCart } = useContext(Context);

  const disableSub = product.amount <= 1;
  const disableAdd = product.availableQuantity <= 0;

  // This is in case of adding +1 product to the cart
  const availableQuantity = product.availableQuantity - 1;

  return (
    <StyledCartItem checkout={ checkout }>
      <div className="cart-item-img">
        <img src={ product.thumbnail } alt="cart thumbnail" />
      </div>
      <div className="cart-item-content">
        <p data-testid="shopping-cart-product-name" className="cart-item-title">
          {product.title}
        </p>
        <p className="cart-item-price">{`R$ ${product.price}`}</p>
        <div className="product-links">
          <p onClick={ () => removeFromCart(product.id) }>Excluir</p>
          <Link to={ `/produto/${product.id}` }>Ver produto</Link>
        </div>
        <div className="cart-item-quantity">
          <div className="handler">
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => subtractFromCart(product.id) }
              disabled={ disableSub }
            >
              <IoRemoveSharp size={ 20 } />
            </button>
            <div className="amount">
              <input
                data-testid="shopping-cart-product-quantity"
                type="text"
                value={ product.amount }
                disabled
              />
            </div>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => addToCart({ id: product.id, availableQuantity }) }
              disabled={ disableAdd }
            >
              <IoAddSharp size={ 20 } />
            </button>
          </div>
          <p>{ `Disponibilidade: ${product.availableQuantity + 1}` }</p>
        </div>
      </div>
    </StyledCartItem>
  );
};

Item.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  checkout: PropTypes.bool,
};

Item.defaultProps = {
  checkout: false,
};

export default Item;
