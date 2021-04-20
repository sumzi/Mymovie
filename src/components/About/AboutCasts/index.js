import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CastsWrapper, CastWrapper } from "./AboutCasts.styled";
import { IMAGE_BASE_URL } from "../../../Config";
import castnull from "../../../images/castnull.png";

function AboutCasts() {
  const { movie } = useSelector((state) => state.about);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <CastsWrapper className="casts">
      <label>🧑‍🤝‍🧑 배우</label>
      <Slider {...settings}>
        {movie.casts.map((cast,i) => (
          <CastWrapper key={i}>
            {cast.profile ? (
              <img
                alt={cast.name}
                src={`${IMAGE_BASE_URL}w200${cast.profile}`}
              />
            ) : (
              <img alt={cast.name} src={castnull} />
            )}
            <div className="name">{cast.name}</div>
            <div className="role">{cast.role} 역</div>
          </CastWrapper>
        ))}
      </Slider>
    </CastsWrapper>
  );
}

export default AboutCasts;
