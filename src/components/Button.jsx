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

const Button = ({ children, bgColor, color, outline }) => (
  <StyledButton bgColor={ bgColor } color={ color } outline={ outline }>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  outline: false,
};

export default Button;
