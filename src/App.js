import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/index';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
