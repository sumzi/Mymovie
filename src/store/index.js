import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddlware();
  const middlewares = [sagaMiddleware];
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
