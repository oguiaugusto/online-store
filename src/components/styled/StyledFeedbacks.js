import styled from 'styled-components';

const StyledFeedbacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  .feedback-title {
    font-size: 25px;
    margin-bottom: 10px;
  }

  .feedback-form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 100%;
  }

  .feedback-form .form-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
  }

  .feedback-form .form-row:first-child {
    flex-direction: column-reverse;
  }

  .feedback-form input, .feedback-form textarea {
    color: #252525;
    font-family: 'Akshar', sans-serif;
    font-size: 16px;
    padding: 8px 10px;
    box-shadow: 0 0 1px rgba(0,0,0,0.1);
    border: 1px solid #b9b9b9;
    border-radius: 4px;
  }

  .feedback-form input:focus, .feedback-form textarea:focus {
    outline: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .feedback-form input:-webkit-autofill {
    box-shadow:0 0 0 500px white inset;
    -webkit-box-shadow:0 0 0 500px white inset;
    -webkit-text-fill-color: #252525;
  }

  .feedback-form input {
    flex: 1;
    margin: 10px 0;
    width: 100%;
  }

  .feedback-form textarea {
    resize: vertical;
    min-height: 120px;
    max-height: 200px;
    width: 100%;
  }

  .feedback-form .form-stars {
    margin-bottom: -2px;
  }

  .feedback-form .form-stars button {
    background: none;
    border: none;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
  }

  .feedback-form .form-stars button:hover {
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
    transform: scale(1.05);
  }

  .product-feedbacks {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 1px solid #959595;
  }

  .product-feedbacks .feedback {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid #cdcdcd;
    padding: 15px 20px;
    width: 100%;
  }

  .product-feedbacks .feedback .feedback-email {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    visibility: visible;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    font-size: 18px;
    width: calc(100% - 130px);
  }

  .product-feedbacks .feedback .feedback-stars {
    display: flex;
    gap: 5px;
    margin-bottom: -2px;
  }

  .product-feedbacks .feedback .feedback-message {
    padding: 5px 10px;
    width: 100%;
  }

  @media screen and (min-width: 576px) {

    .feedback-form {
      width: 540px;
      padding: 0 20px;
    }

    .product-feedbacks {
      width: 80%;
    }

    .product-feedbacks .feedback {
      width: 100%;
      padding: 15px 20px;
    }

    .feedback-title {
      margin: 0;
    }

    .feedback-form .form-row:first-child {
      flex-direction: row;
    }

    .feedback-form input {
      margin-right: 15px;
      width: unset;
    }
  }

  @media screen and (min-width: 992px) {
  
    .product-feedbacks {
      width: 800px;
    }
  }
`;

export default StyledFeedbacks;
