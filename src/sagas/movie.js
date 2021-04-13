import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effect';

import {
  LOAD_MOVIES_REQUEST,
} from '../reducers/movie';

function* loadMoives(action) {
  try{
    
  }catch(){
    
  }
}

function* watchAddMovie() {
  yield takeLatest(LOAD_MOVIES_REQUEST, loadMoives);
}

export default function* movieSaga() {
  yield all([
    fork(watchAddMovie),
  ]);
}