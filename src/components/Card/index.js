import React from 'react';
import { Col, Image }from 'antd';
import { CardWrapper } from './Card.styled';
function Card(movie) {
  return (
    <Col lg={6} md={8} xs={24}>
      <CardWrapper>
        <a href={`/movie/${movie.movieId}`}>
          {movie.image ?
          <img src={movie.image} alt={movie.movieTitle}/>:
          <Image src="err"/>}
        </a>
      </CardWrapper>
      
    </Col>
  )
}

export default Card
