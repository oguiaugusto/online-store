import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../ContextAPI';

const CategoriesList = () => {
  const { categories } = useContext(Context);

  return (
    <div className="categories-list">
      <ul>
        {
          categories.map(({ id, name }) => (
            <Link key={ id } to={ `/categoria/${id}` }>
              <li data-testid="category">{name}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

export default CategoriesList;
