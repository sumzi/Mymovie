import { all, fork } from 'redux-saga/effects';
import movieSaga from './movie';
import homeSaga from './home';

export default function* rootSaga() {
  yield all([
    fork(movieSaga),
    fork(homeSaga),
  ]);
}