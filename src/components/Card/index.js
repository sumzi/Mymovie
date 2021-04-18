import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Image } from "antd";
import { CardWrapper } from "./Card.styled";
import { BACKGROUND_IMAGE_REQUEST } from '../../store/reducers/movie';

function Card(movie) {
  const dispatch = useDispatch();

  const mouseEnter = () => {
    console.log(movie.movieTitle);
    dispatch({
      type: BACKGROUND_IMAGE_REQUEST,
      data: movie.movieBgImg
    })
  };

  const movieClick = () => {

  }
  
  return (
      <Col lg={6} md={8} xs={24}>
        <CardWrapper>
          <Link to={`/about/${movie.movieId}`}>
            {movie.image ? (
              <img src={movie.image} alt={movie.movieTitle} onMouseEnter={mouseEnter} onClick={movieClick}/>
            ) : (
              <Image src="err" />
            )}
          </Link>
        </CardWrapper>
      </Col>
  );
}

export default Card;
