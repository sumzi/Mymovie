import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../../Config';
import { CardWrapper, Poster, Detail } from './SearchCard.styled';

function SearchCard({movie}) {
  return (
    <Col xs={24} md={12}>
      <Link to={`/about/${movie.id}`}>
        <CardWrapper>
          <Poster>
            <img
              src={`${IMAGE_BASE_URL}w300${movie.poster_path}`}
              alt={movie.title}
            />
          </Poster>
          <Detail>
            <div className="title">{movie.title}</div>
            <div className="original_title">{movie.original_title}</div>
            <div className="release_date">{movie.release_date}</div>
            <div className="rating">⭐{movie.rating}</div>
          </Detail>
        </CardWrapper>
      </Link>
    </Col>
  );
}

export default SearchCard;