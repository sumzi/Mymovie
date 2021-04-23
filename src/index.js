import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/Movie">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
