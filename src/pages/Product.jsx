/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
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
  const { setQuery } = useContext(Context);
  const { id } = useParams();

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

  const discountValue = originalPrice
    ? Math.floor(100 - (price / (originalPrice / 100))) : 0;

  // eslint-disable-next-line max-len
  const productCondition = `${conditions[condition] || 'Não especificado'} | ${soldQuantity} vendidos`;

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
                <p className="product-title">{title}</p>
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
                  <Button bgColor="#37367e" color="#ffffff" outline>Comprar</Button>
                  <Button bgColor="#5351c2" color="#ffffff" outline>
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
