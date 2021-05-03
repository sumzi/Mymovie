import React from 'react';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../../Config';
import { CardWrapper, Poster, Detail,Wrapper } from './SearchCard.styled';

function SearchCard({movieId,title}) {
  return (
    <Wrapper>
      <Link to={`/about/${movieId}`}>
        <div>{title}</div>
      </Link>
    </Wrapper>
  );
}

export default SearchCard;