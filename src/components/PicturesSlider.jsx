import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import { StyledCarousel } from './styled';

const PicturesSlider = ({ pictures, naturalSize }) => (
  <StyledCarousel>
    <CarouselProvider
      naturalSlideWidth={ naturalSize }
      naturalSlideHeight={ naturalSize }
      totalSlides={ pictures.length }
      dragEnabled={ false }
    >
      <Slider>
        {pictures.map(({ id: picId, url }, index) => (
          <Slide
            key={ `picture-${picId}` }
            index={ index }
            className="carousel-slide"
          >
            <img
              width={ naturalSize }
              height={ naturalSize }
              src={ url }
              alt="product"
              className="carousel-image"
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack
        className="carousel-btn carousel-btn-back"
        onClick={ (e) => { e.stopPropagation(); } }
      >
        <MdOutlineNavigateBefore size={ 25 } color="#ffffff" />
      </ButtonBack>
      <ButtonNext
        className="carousel-btn carousel-btn-next"
        onClick={ (e) => { e.stopPropagation(); } }
      >
        <MdOutlineNavigateNext size={ 25 } color="#ffffff" />
      </ButtonNext>
    </CarouselProvider>
  </StyledCarousel>
);

PicturesSlider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
  naturalSize: PropTypes.number.isRequired,
};

export default PicturesSlider;
