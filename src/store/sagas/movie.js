import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_MOVIES_REQUEST,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
} from '../reducers/movie';
import  { API_URL, API_KEY } from '../../Config';

const menuType = [
  {
    type: "Now Playing",
    path: "movie/now_playing",
  },
  {
    type: "Popular",
    path: "movie/popular",
  },
  {
    type: "Top Rated",
    path: "movie/top_rated",
  },
  {
    type: "Upcoming",
    path: "movie/upcoming",
  },
];

function loadMoviesAPI(data){
  return axios.get(`${API_URL}${menuType[data].path}?api_key=${API_KEY}&language=ko-KR`);
}

function* loadMovies(action) {
  try{
    const result = yield call(loadMoviesAPI, action.data);
    yield put({
      type: LOAD_MOVIES_SUCCESS,
      movieType: menuType[action.data].type,
      data: result.data.results,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: LOAD_MOVIES_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLoadMovies() {
  yield takeLatest(LOAD_MOVIES_REQUEST, loadMovies);
}

export default function* movieSaga() {
  yield all([
    fork(watchLoadMovies),
  ])
}