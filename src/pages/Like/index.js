import React from 'react';
import { useSelector } from 'react-redux';
import Nodata from '../../components/Nodata';
import { LikeWrapper } from './Like.styled';

function Like() {
  const { likes } = useSelector(state => state.movie)
  return (
    <LikeWrapper>
      <p>좋아하는 영화</p>
      {likes?(<div>있네여</div>)
      :<Nodata/>}
    </LikeWrapper>
  )
}

export default Like
