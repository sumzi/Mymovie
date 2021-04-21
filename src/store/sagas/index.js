import { all, fork } from 'redux-saga/effects';
import movieSaga from './movie';
import homeSaga from './home';
import aboutSaga from './about';
import searchSaga from './search';

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(homeSaga),
    fork(aboutSaga),    
    fork(searchSaga),
  ]);
}