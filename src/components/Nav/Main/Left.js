import React from 'react'
import movie from '../../../images/movie.png';
import { Link } from 'react-router-dom';
import { LeftWrapper, Logo } from './Main.styled';

function Left() {
  return (
    <LeftWrapper>
      <Logo>
        <Link to='/'>
          <img src={movie} alt='movie'/>
        </Link>
      </Logo>
    </LeftWrapper>
  )
}

export default Left
