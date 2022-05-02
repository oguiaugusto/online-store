/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../ContextAPI';
import { Item } from '../components/Cart';
import { Button } from '../components';

const Cart = () => {
  const { cartProducts } = useContext(Context);
  const history = useHistory();

  const totalPrice = cartProducts.reduce((acc, { amount, price }) => (
    acc + (amount * price)
  ), 0).toFixed(2);

  return (
    <div className="cart-page">
      <p className="cart-title">Carrinho de compras</p>
      {
        cartProducts.length === 0 ? (
          <p
            data-testid="shopping-cart-empty-message"
            className="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        ) : (
          <>
            <div className="cart-items">
              <ul>
                {
                  cartProducts.map((p) => (
                    <Item key={ p.id } product={ p } />
                  ))
                }
              </ul>
            </div>
            <p className="cart-total-price">{ `Total da compra: R$ ${totalPrice}` }</p>
            <Button
              className="cart-checkout"
              bgColor="#37367e"
              color="#ffffff"
              outline
              idTest="checkout-products"
              onClick={ () => history.push('/finalizar') }
            >
              Finalizar compra
            </Button>
          </>
        )
      }
    </div>
  );
};

export default Cart;
