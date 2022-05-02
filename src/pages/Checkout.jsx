/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { Context } from '../ContextAPI';
import { Input } from '../components/Checkout';
import { Item } from '../components/Cart';
import { Button } from '../components';

const Checkout = () => {
  const { cartProducts } = useContext(Context);

  const totalPrice = cartProducts.reduce((acc, { amount, price }) => (
    acc + (amount * price)
  ), 0).toFixed(2);

  return (
    <div className="checkout-page">
      <div className="checkout-title">
        <p className="checkout-title">Finalizar compra</p>
      </div>
      <div className="checkout-products">
        <ul>
          {
            cartProducts.map((p) => (
              <Item key={ p.id } product={ p } checkout />
            ))
          }
        </ul>
      </div>
      <form className="checkout-form">
        <Input
          idTest="checkout-fullname"
          labelText="Nome completo"
          id="fullname"
          placeholder="Ex: João da Silva"
        />
        <Input
          idTest="checkout-email"
          labelText="Email"
          type="email"
          id="email"
          placeholder="Ex: seu@email.com"
        />
        <Input
          idTest="checkout-cpf"
          labelText="CPF"
          id="cpf"
          placeholder="Ex: 000000000-00"
        />
        <Input
          idTest="checkout-phone"
          labelText="Telefone"
          id="phone"
          placeholder="Ex: (00) 00000-0000"
        />
        <Input
          idTest="checkout-cep"
          labelText="CEP"
          id="cep"
          placeholder="Ex: 00000-000"
        />
        <Input
          idTest="checkout-address"
          labelText="Endereço"
          id="address"
          placeholder="Ex: Rua das Rosas, Florianópolis - SC"
        />
      </form>
      <div className="checkout-buy">
        <p>{ `Total da compra: R$ ${totalPrice}` }</p>
        <Button
          bgColor="#37367e"
          color="#ffffff"
          outline
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
