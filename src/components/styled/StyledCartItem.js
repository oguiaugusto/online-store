import styled from 'styled-components';

const StyledCartItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background: white;
  height: 120px;
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;

  .cart-item-img {
    width: 100px;
    height: 100px;
  }

  .cart-item-img img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .cart-item-content {
    position: relative;
    display: grid;
    align-items: center;
    grid-template-rows: 40px 1fr 20px;
    height: 100%;
    padding-left: 10px;
    width: calc(100% - 100px);
  }

  .cart-item-title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    visibility: visible;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
    align-self: flex-start;
  }


  .cart-item-price {
    font-size: 20px;
  }

  .product-links {
    display: flex;
    font-size: 14px;
  }

  .product-links p {
    margin-right: 10px;
    color: #2e68ed;
    cursor: pointer;
    transition: color 100ms;
  }

  .product-links a {
    color: #2e68ed;
    transition: color 100ms;
  }

  .product-links p:hover, .product-links a:hover {
    color: #214eb5;
  }

  .cart-item-quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .cart-item-quantity .handler {
    display: flex;
  }

  .cart-item-quantity .handler button {
    background: none;
    border: none;
    color: #252525;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
  }

  .cart-item-quantity .handler button:hover {
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  }

  .cart-item-quantity .handler button:disabled {
    color: #3a3a3a;
    cursor: initial;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0));
  }

  .cart-item-quantity .handler div {
    width: 35px;
    height: 35px;
  }

  .cart-item-quantity .handler div input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: 'Akshar', sans-serif;
    padding: 5px;
  }

  .cart-item-quantity p {
    color: #646464;
    font-size: 12px;
  }

  @media screen and (min-width: 576px) {
  
    padding: 10px 20px;
  }

  @media screen and (min-width: 768px) {
  
    width: 768px;
    padding: 10px 30px;
  }

  /* @media screen and ( min-width : 992px ) {
  
    
  } */
`;

export default StyledCartItem;
