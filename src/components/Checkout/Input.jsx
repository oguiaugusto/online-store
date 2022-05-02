import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from '../styled';

const Input = ({ labelText, id, placeholder, type, idTest }) => (
  <StyledLabel htmlFor={ id }>
    {labelText}
    <input
      type={ type }
      id={ id }
      placeholder={ placeholder }
      data-testid={ idTest }
    />
  </StyledLabel>
);

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  idTest: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  idTest: '',
};

export default Input;
