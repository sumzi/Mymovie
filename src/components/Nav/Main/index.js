import React from 'react'
import Left from './Left';
import Right from './Right';
import { MainWrapper } from './Main.styled';
import { useSelector } from 'react-redux';

function Main() {
  const {darkMode} = useSelector(state => state.home);
  return (
    <MainWrapper mode={darkMode}>
      <Left/>
      <Right mode={darkMode}/>
    </MainWrapper>
  )
}
export default Main
