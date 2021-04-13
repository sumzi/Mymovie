import React from 'react'
import movie from '../../../images/movie.png';
import { MainWrapper, Left, Right } from './Main.styled';

function Main() {
  return (
    <MainWrapper>
      <Left>
        <a href='/'>
          <img src={movie} alt='movie'/>
        </a>
      </Left>
      <Right>
        <a href='/search'>🎥</a>
        <a href='/like'>🤍</a>
      </Right>
    </MainWrapper>
  )
}
export default Main
