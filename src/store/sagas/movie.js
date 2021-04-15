import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_MOVIES_REQUEST,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
} from '../reducers/movie';
import  { API_URL, API_KEY } from '../../Config';


function loadMoviesAPI(data){
  console.log(data);
  return axios.get(`${API_URL}${data}?api_key=${API_KEY}&language=ko-KR`);
}

function* loadMovies(action) {
  try{
    const result = yield call(loadMoviesAPI, action.path);
    console.log(result.data.results);
    yield put({
      type: LOAD_MOVIES_SUCCESS,
      movieType: action.movieType,
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