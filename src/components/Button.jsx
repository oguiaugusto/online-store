import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => (props.outline ? 'none' : props.bgColor)};
  border: 2px solid ${(props) => props.bgColor};
  color: ${(props) => (props.outline ? props.bgColor : props.color)};

  :hover {
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    filter: ${(props) => (props.outline ? 'none' : 'saturate(0.8)')};
  }

  :active {
    filter: ${(props) => (props.outline ? 'saturate(0.8)' : 'saturate(0.6)')};
  }

  :disabled {
    filter: contrast(0.7) opacity(0.8);
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
  }

  transition-duration: 200ms;
  cursor: pointer;
  user-select: none;
  outline: none;
  box-shadow: 0 1px 3px rgb(0, 0, 0, 0.15);
  font-weight: 600;
  font-family: 'Akshar', sans-serif;
  font-size: 15px;
  border-radius: 5px;
  padding: 8px 10px;
`;

const Button = ({
  children, bgColor, color, outline, onClick, disabled, idTest, className,
}) => (
  <StyledButton
    bgColor={ bgColor }
    color={ color }
    outline={ outline }
    onClick={ onClick }
    disabled={ disabled }
    data-testid={ idTest }
    className={ className }
  >
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  idTest: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  outline: false,
  disabled: false,
  idTest: '',
  className: '',
  onClick: () => {},
};

export default Button;
