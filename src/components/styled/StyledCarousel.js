import styled from 'styled-components';

const StyledCarousel = styled.div`
  position: relative;

  .carousel-btn {
    background-color: rgba(0,0,0, 0.1);
    border: none;
    height: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0;
  }

  .carousel-btn:hover {
    background-color: rgba(0,0,0, 0.20);
  }

  .carousel-btn:disabled {
    display: none;
  }

  .carousel-btn svg {
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.2));
    transform: scale(1);
  }

  .carousel-btn svg:hover {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
    transform: scale(1.1);
  }

  .carousel-btn-back {
    left: 0;
  }

  .carousel-btn-next {
    right: 0;
  }

  .carousel-image {
    display: block;
    margin: auto;
    object-fit: contain;
  }

  .carousel-slide div div {
    outline: none;
  }
`;

export default StyledCarousel;
