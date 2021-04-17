import React from 'react'
import Left from './Left';
import Right from './Right';
import { MainWrapper } from './Main.styled';

function Main() {
  return (
    <MainWrapper>
      <Left/>
      <Right/>
    </MainWrapper>
  )
}
export default Main
