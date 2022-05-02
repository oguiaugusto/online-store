import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #3a3a3a;

  .header-content {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    padding: 8px;
    width: 100%;
    margin: auto;
  }

  button {
    cursor: pointer;
  }

  .icon-btn {
    background: none;
    border: none;
  }

  .header-logo {
    display: flex;
    justify-content: center;
  }

  .header-logo img {
    /* height: 33px; */
    cursor: pointer;
  }

  .standart-logo {
    display: none;
  }

  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 8px;
  }

  .search-bar input {
    font-family: 'Akshar', sans-serif;
    border: 1px solid #b9b9b9;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    color: #252525;
    padding: 6px 10px;
    width: 100%;
  }

  .search-bar input:focus {
    outline: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .search-bar button {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.1));
  }

  .search-bar button:hover {
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
  }

  .header-icons {
    display: flex;
    justify-content: center;
  }

  .header-icons button {
    position: relative;
  }

  .header-icons button p {
    font-weight: 600;
    color: #e9e9e9;
    position: absolute;
    font-size: 9px;
    right: 12.5px;
    top: 10px;
    text-align: center;
    width: 15px;
  }

  .header-icons button:hover {
    filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.25));
  }

  @media screen and (min-width: 768px) {

    .header-content {
      grid-template-columns: 190px 1fr 50px;
      max-width: 768px;
    }
  
    .smaller-logo {
      display: none;
    }

    .standart-logo {
      display: block;
    }

    .search-bar {
      max-width: 500px;
      margin: 0 20px;
    }

    .header-icons button p {
      top: 13px;
    }
  }
`;

export default StyledHeader;
