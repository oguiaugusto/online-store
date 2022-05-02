/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory, useParams } from 'react-router-dom';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { Context } from '../ContextAPI';
import { getProductDetails, getProductDescription } from '../services/api';
import { Button, PicturesSlider } from '../components';
import { AttributesTable } from '../components/Product';

const conditions = {
  used: 'Usado',
  new: 'Novo',
};

const Product = () => {
  const { setQuery, cartProducts, addToCart } = useContext(Context);
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setQuery('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const promises = [getProductDetails(id), getProductDescription(id)];
    Promise.all(promises).then((r) => {
      setProduct(r[0]);
      setDescription(r[1].plain_text);
      setLoading(false);
    });
  }, [id]);

  const {
    title,
    pictures,
    condition,
    sold_quantity: soldQuantity,
    original_price: originalPrice,
    price,
    shipping: { free_shipping: freeShipping } = {},
    attributes,
  } = product;
  let { available_quantity: availableQuantity = 0 } = product;

  const discountValue = originalPrice
    ? Math.floor(100 - (price / (originalPrice / 100))) : 0;

  // eslint-disable-next-line max-len
  const productCondition = `${conditions[condition] || 'Não especificado'} | ${soldQuantity} vendidos`;

  const productOnCart = cartProducts.find((p) => p.id === id);
  const productAmountOnCart = (productOnCart ? productOnCart.amount : 0) + 1;
  // I added the + 1 because i'm assuming that the user is going to add to cart
  // if it doesn't, nothing happens anyway

  availableQuantity -= productAmountOnCart;
  const isProductAvailable = availableQuantity >= 0;
  // it's for the same reason up above that I put >= to 0

  return (
    <div className="product-page">
      {
        loading ? (
          <div className="loader">
            <Loader type="ThreeDots" color="#252525" height={ 25 } width={ 25 } />
          </div>
        ) : (
          <>
            <div className="product-main">
              <div className="product-pictures">
                <PicturesSlider pictures={ pictures } naturalSize={ 500 } />
              </div>
              <div className="product-info">
                <p className="product-condition-and-sold-quantity">
                  {productCondition}
                </p>
                <p className="product-title" data-testid="product-detail-name">{title}</p>
                {
                  originalPrice && originalPrice !== price ? (
                    <div className="product-price-discount">
                      <p className="original-price">
                        {`R$ ${originalPrice.toFixed(2)}` }
                      </p>
                      <p className="current-price">{`R$ ${price.toFixed(2)}` }</p>
                      <p className="product-off">{ `${discountValue}% OFF` }</p>
                    </div>
                  ) : (
                    <p className="product-price">{`R$ ${price.toFixed(2)}` }</p>
                  )
                }
                <div className="product-buy">
                  { freeShipping ? (
                    <div className="product-free-shipping">
                      <MdOutlineLocalShipping size={ 20 } />
                      <span>Frete Grátis</span>
                    </div>) : null }
                  <Button
                    bgColor="#37367e"
                    color="#ffffff"
                    outline
                    disabled={ !isProductAvailable }
                  >
                    Comprar
                  </Button>
                  <Button
                    idTest="product-detail-add-to-cart"
                    bgColor="#5351c2"
                    color="#ffffff"
                    outline
                    disabled={ !isProductAvailable }
                    onClick={ () => {
                      addToCart({
                        id, title, price, thumbnail: pictures[0].url, availableQuantity,
                      });
                      history.push('/carrinho');
                    } }
                  >
                    Adicionar ao carrinho
                  </Button>
                </div>
              </div>
            </div>
            <div className="border" />
            <div className="product-details">
              <AttributesTable attributes={ attributes } />
              <div className="product-description">
                <p className="description-title">Descrição</p>
                <p className="description-content">
                  {description || ''}
                </p>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Product;
