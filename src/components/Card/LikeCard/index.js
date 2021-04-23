import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardWrapper, Poster, Detail, LikeButton, Title } from './LikeCard.styled';
import { UNLIKE_MOVIE_REQUEST } from '../../../store/reducers/like';

function LikeCard({movie}) {
  const dispatch = useDispatch();

  const likeButton = () => {
    dispatch({
      type: UNLIKE_MOVIE_REQUEST,
      data: movie.id,
    });
  };

  return (
    <Col xs={12} md={8} lg={6}>
      <CardWrapper>
        <div>
          <Link to={`/about/${movie.id}`}>
            <Poster className="image" Img={movie.backdrop_path}></Poster>
          </Link>
        </div>
        <Detail>
          <LikeButton onClick={likeButton} >
            <div className='like'>❤</div>
            <div className='unlike'>💔</div>
          </LikeButton>
          <Title>{movie.title}</Title>
        </Detail>
      </CardWrapper>
    </Col>
  );
}

export default LikeCard;
