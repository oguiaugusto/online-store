import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../ContextAPI';

const Product = () => {
  const { setQuery } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    setQuery('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { `Produto: ${id}` }
    </div>
  );
};

export default Product;
