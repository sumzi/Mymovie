import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Running, Search, Like, About } from './pages/index';
import { Main } from './components/Nav';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about/:movieId' component={About} />
        <Route path='/running' component={Running} />
        <Route path='/search' component={Search} />
        <Route path='/like' component={Like} />
      </Switch>
      <footer>
        <p>Copyrignt © 2021 sumzi</p>
      </footer>
    </>
  );
}

export default App;
