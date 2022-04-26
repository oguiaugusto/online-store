import styled from 'styled-components';

const StyledProductCard = styled.div`
  margin: 10px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.18);
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
  min-width: 284px;
  width: 284px;
  cursor: pointer;

  :hover {
    box-shadow: 0 1px 15px 0 rgb(0 0 0 / 25%);
  }

  .carousel {
    border-bottom: 1px solid rgb(233 233 233);
  }

  .product-info {
    padding: 15px;
  }

  .product-price-discount {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .original-price {
    flex-basis: 100%;
    color: #999999;
    text-decoration: line-through;
    font-size: 12px;
  }

  .current-price, .product-price {
    font-size: 25px;
  }

  .product-off {
    color: #2b912b;
    margin-left: 8px;
  }

  .product-free-shipping {
    margin: 3px 0;
    color: #2b912b;
    font-weight: 500;
    font-size: 15px;
  }

  .product-title {
    margin: 10px 0 0;
    color: #383838;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    visibility: visible;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-clamp: 2;
  }
`;

export default StyledProductCard;
