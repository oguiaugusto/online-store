/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
import { Context } from '../../ContextAPI';
import { StyledCategoriesList } from '../styled';

const OPENED_LIST = 'list-opened';
const CLOSING_LIST = 'list-closing';
const CLOSED_LIST = 'list-closed';

const HALF_SECOND = 500;

const CategoriesList = () => {
  const { categories } = useContext(Context);
  const [listClass, setListClass] = useState(CLOSED_LIST);

  const handleList = () => {
    if (listClass === OPENED_LIST) {
      setListClass(CLOSING_LIST);
      setTimeout(() => { setListClass(CLOSED_LIST); }, HALF_SECOND);
    } else {
      setListClass(OPENED_LIST);
    }
  };

  return (
    <StyledCategoriesList>
      <div className="categories-title" onClick={ handleList }>
        <p>Categorias</p>
        <div>
          {
            listClass === OPENED_LIST ? (
              <BsChevronCompactUp size={ 30 } className="categories-icon" />
            ) : (
              <BsChevronCompactDown size={ 30 } className="categories-icon" />
            )
          }
        </div>
      </div>
      <ul className={ listClass }>
        {
          categories.map(({ id, name }) => (
            <Link key={ id } to={ `/categoria/${id}` } onClick={ handleList }>
              <li data-testid="category">{name}</li>
            </Link>
          ))
        }
      </ul>
    </StyledCategoriesList>
  );
};

export default CategoriesList;
