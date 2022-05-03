import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Stars = ({ stars, clickable, handleStars }) => {
  // eslint-disable-next-line no-magic-numbers
  const fiveStars = [1, 2, 3, 4, 5];
  if (clickable) {
    return (
      <div className="form-stars">
        {
          fiveStars.map((starAmount) => (starAmount <= stars ? (
            <button
              key={ `${starAmount}-star` }
              type="button"
              onClick={ () => handleStars(starAmount) }
            >
              <AiFillStar color="#252525" size={ 25 } />
            </button>
          ) : (
            <button
              key={ `${starAmount}-star` }
              type="button"
              onClick={ () => handleStars(starAmount) }
            >
              <AiOutlineStar color="#252525" size={ 25 } />
            </button>
          )))
        }
      </div>
    );
  }

  return (
    <div className="feedback-stars">
      {
        // eslint-disable-next-line no-magic-numbers
        fiveStars.map((starAmount) => (starAmount <= stars ? (
          <AiFillStar key={ `${starAmount}-star` } color="#252525" size={ 20 } />
        ) : (
          <AiOutlineStar key={ `${starAmount}-star` } color="#252525" size={ 20 } />
        )))
      }
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
  clickable: PropTypes.bool,
  handleStars: PropTypes.func,
};

Stars.defaultProps = {
  clickable: false,
  handleStars: () => {},
};

export default Stars;
