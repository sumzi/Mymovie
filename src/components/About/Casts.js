import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Wrapper} from './About.styled';
import { Card } from 'antd';
import { IMAGE_BASE_URL } from "../../Config";


function Casts() {
  const {movie} = useSelector(state => state.about);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Wrapper>
      <p>배우</p>
      <Slider {...settings}>
        {movie.casts.map(cast => (
          <Card 
          cover={<img alt={cast.name} src={`${IMAGE_BASE_URL}w200${cast.profile}`}/>}>
          <div>{cast.name}</div>
          </Card>
        ))}
      </Slider>
    </Wrapper>
  );
}

export default Casts;
