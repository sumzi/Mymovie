import React from 'react'
import movie from '../../../images/movie.png';
import { Link } from 'react-router-dom';
import { MainWrapper, Left, Right } from './Main.styled';

function Main() {
  return (
    <MainWrapper>
      <Left>
        <Link to='/'>
          <img src={movie} alt='movie'/>
        </Link>
      </Left>
      <Right>
        <Link to='/search'>🎥</Link>
        <Link to='/like'>🤍</Link>
      </Right>
    </MainWrapper>
  )
}
export default Main
