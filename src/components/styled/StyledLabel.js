import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 14px;
  color: #3a3a3a;

  input {
    color: #252525;
    font-family: 'Akshar', sans-serif;
    font-size: 16px;
    margin-top: 4px;
    padding: 8px 10px;
    width: 100%;
    box-shadow: 0 0 1px rgba(0,0,0,0.1);
    border: 1px solid #b9b9b9;
    border-radius: 4px;
  }

  input:focus {
    outline: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  input:-webkit-autofill {
    box-shadow:0 0 0 500px white inset;
    -webkit-box-shadow:0 0 0 500px white inset;
    -webkit-text-fill-color: #252525;
  }
`;

export default StyledLabel;
