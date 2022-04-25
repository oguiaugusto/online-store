import React, { useContext } from 'react';
import { Context } from '../../ContextAPI';

const CategoriesList = () => {
  const { categories } = useContext(Context);

  return (
    <div className="categories-list">
      <ul>
        {
          categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">{name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default CategoriesList;
