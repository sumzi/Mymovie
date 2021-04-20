import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImagesWrapper, ImageWrapper } from "./AboutImages.styled";
import { IMAGE_BASE_URL } from "../../../Config";

function AboutImages() {
  const { movie } = useSelector((state) => state.about);
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <ImagesWrapper>
      <label>📷 이미지</label>
      <Slider {...settings}>
        {movie.images.map((image,i) => (
           <ImageWrapper key={i}>
                 <img
                 alt={'영화이미지'}
                 src={`${IMAGE_BASE_URL}w500${image}`}
               />  
           </ImageWrapper>
        ))}
      </Slider>
    </ImagesWrapper>
  );
}

export default AboutImages
