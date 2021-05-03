import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './SearchCard.styled';

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