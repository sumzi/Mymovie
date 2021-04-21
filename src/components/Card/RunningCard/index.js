import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Image } from "antd";
import { CardWrapper } from "./RunningCard.styled";
import { BACKGROUND_IMAGE_REQUEST } from '../../../store/reducers/movie';

function RunningCard(movie) {
  const dispatch = useDispatch();

  const mouseEnter = () => {
    dispatch({
      type: BACKGROUND_IMAGE_REQUEST,
      data: movie.movieBgImg
    });
  };
  
  return (
      <Col lg={6} md={8} xs={24}>
        <CardWrapper>
          <Link to={`/about/${movie.movieId}`}>
            {movie.image ? (
              <img src={movie.image} alt={movie.movieTitle} onMouseEnter={mouseEnter} />
            ) : (
              <Image src="err" />
            )}
          </Link>
        </CardWrapper>
      </Col>
  );
}

export default RunningCard;
