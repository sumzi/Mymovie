import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/index';
import { Main } from './components/Nav';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <footer>
        <p>Copyrignt © 2021 sumzi</p>
      </footer>
    </>
  );
}

export default App;
