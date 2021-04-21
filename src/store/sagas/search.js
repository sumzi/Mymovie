import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from '../reducers/search';
import  { API_URL, API_KEY } from '../../Config';

async function searchMoviesAPI(data){
  const result = await axios.get(`${API_URL}search/movie/?query=${data}&api_key=${API_KEY}&language=ko-KR`);
  const movies = result.data.results.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      original_title: movie.original_title,
      rating: movie.vote_average,
      release_date: movie.release_date
    }
  });
  return movies
}

function* searchMovies(action) {
  try{
    const result = yield call(searchMoviesAPI, action.data);
    yield put({
      type: SEARCH_MOVIES_SUCCESS,
      data: result,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: SEARCH_MOVIES_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchSearchMovies() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMovies);
}

export default function* searchSaga() {
  yield all([
    fork(watchSearchMovies),
  ])
}