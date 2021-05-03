import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Running, Search, Like, About } from './pages/index';
import { Main } from './components/Nav';
import GlobalStyle from './styles/global';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

function App() {
  const { darkMode } = useSelector(state => state.home);
  
  return (
    <>
      <GlobalStyle mode={darkMode}/>
      <Main />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about/:movieId' component={About} />
        <Route path='/running' component={Running} />
        <Route path='/search' component={Search} />
        <Route path='/like' component={Like} />
      </Switch>
      <BackTop>
        <div style={style}>▲</div>
      </BackTop>
    </>
  );
}

export default App;
