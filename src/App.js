import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Movie, Search, Like, About } from './pages/index';
import { Main } from './components/Nav';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/movie' component={Movie} />
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
