import styled from 'styled-components';

const StyledCategoriesList = styled.div`
  background-color: #fbfbfb;

  .categories-title {
    color: #7a7a7a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .categories-title p {
    font-size: 20px;
  }

  .categories-title div {
    cursor: pointer;
    padding: 0 5px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    position: relative;
  }

  ul a {
    color: #252525;
  }

  ul a li {
    padding: 15px;
    background-color: #fbfbfb;
    border-top: 1px solid #c7c7c7;
  }

  ul a:last-child li {
    border-bottom: 1px solid #c7c7c7;
  }

  ul a li:hover {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.06);
  }

  .list-opened {
    animation: fadeIn 500ms;
  }

  .list-closing {
    animation: fadeOut 500ms;
  }

  .list-closed {
    display: none;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  @media screen and (min-width: 576px) {

    width: 40%;
    min-width: 250px;
    max-width: 300px;
    border-right: 1px solid #c7c7c7;

    .categories-title {
      background-color: #fbfbfb;
    }

    .list-opened, .list-closing, .list-closed {
      display: block;
      animation: none;
    }

    .categories-icon {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {

    width: 300px;
  }

  @media screen and (min-width: 1660px) {
  
    width: 450px;
    max-width: 450px;
  }
`;

export default StyledCategoriesList;
