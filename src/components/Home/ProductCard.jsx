import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProductPictures } from '../../services/api';
import PicturesSlider from '../PicturesSlider';
import { StyledProductCard } from '../styled';

const MAX_PICTURE_INDEX = 10;

const ProductCard = ({ product }) => {
  const history = useHistory();
  const {
    id,
    title,
    price,
    original_price: originalPrice,
    shipping: {
      free_shipping: freeShipping,
    },
  } = product;
  const [pictures, setPictures] = useState([]);

  const discountValue = originalPrice
    ? Math.floor(100 - (price / (originalPrice / 100))) : 0;

  useEffect(() => {
    getProductPictures(id).then((r) => setPictures(r.slice(0, MAX_PICTURE_INDEX)));
  }, [id]);

  return (
    <StyledProductCard
      data-testid="product"
      className="product-card"
      onClick={ () => history.push(`/produto/${id}`) }
    >
      <PicturesSlider pictures={ pictures } naturalSize={ 284 } />
      <div className="product-info">
        {
          originalPrice ? (
            <div className="product-price-discount">
              <p className="original-price">{`R$ ${originalPrice.toFixed(2)}` }</p>
              <p className="current-price">{`R$ ${price.toFixed(2)}` }</p>
              <p className="product-off">{ `${discountValue}% OFF` }</p>
            </div>
          ) : (
            <p className="product-price">{`R$ ${price.toFixed(2)}` }</p>
          )
        }
        { freeShipping ? <p className="product-free-shipping">Frete Grátis</p> : null }
        <p className="product-title">{title}</p>
      </div>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
