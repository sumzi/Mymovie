import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  HOME_MOVIE_REQUEST,
  HOME_MOVIE_SUCCESS,
  HOME_MOVIE_FAILURE,
  CHANGE_MODE_REQUEST,
  CHANGE_MODE_SUCCESS,
  CHANGE_MODE_FAILURE,
    
} from '../reducers/home';
import { API_URL, API_KEY } from '../../Config';

function homeMoviesAPI(){
  return axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}&language=ko-KR`);
}

function* homeMovie() {
  try{
    const movies = yield call(homeMoviesAPI);
    const results = movies.data.results.slice(0,4);
    
    yield put({
      type:  HOME_MOVIE_SUCCESS,
      data: results
    })
  }catch(err) {
    console.error(err);
    yield put({
      type: HOME_MOVIE_FAILURE,
      error: err.response.data
    })
  }
}

function* changeMode(action) {
  try{
    yield put({
      type:  CHANGE_MODE_SUCCESS,
      data: action.data
    })
  }catch(err) {
    console.error(err);
    yield put({
      type: CHANGE_MODE_FAILURE,
      error: err.response.data
    })
  }
}

function* watchHomeMovie(){
  yield takeLatest(HOME_MOVIE_REQUEST, homeMovie);
}

function* watchChangeMode(){
  yield takeLatest(CHANGE_MODE_REQUEST, changeMode);
}

export default function* homeSaga() {
  yield all([
    fork(watchHomeMovie),
    fork(watchChangeMode),
  ])
}