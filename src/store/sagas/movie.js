import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  LOAD_MOVIES_REQUEST,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILURE,
  ADD_MOVIES_REQUEST,
  ADD_MOVIES_SUCCESS,
  ADD_MOVIES_FAILURE,
  BACKGROUND_IMAGE_REQUEST,
  BACKGROUND_IMAGE_SUCCESS,
  BACKGROUND_IMAGE_FAILURE,
} from '../reducers/movie';
import  { API_URL, API_KEY } from '../../Config';

const menuType = [
  {
    type: "Now",
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

async function loadMoviesAPI(data) {
  const result = await axios.get(`${API_URL}${menuType[data].path}?api_key=${API_KEY}&language=ko-KR&page=1`);

  const movies = result.data.results.map(movie => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    };
  });
  return movies;
};

function* loadMovies(action) {
  try{
    const result = yield call(loadMoviesAPI, action.data);
    yield put({
      type: LOAD_MOVIES_SUCCESS,
      movieId: action.data,
      data: result,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: LOAD_MOVIES_FAILURE,
    })
  }
}

function addMoviesAPI(data){
  return axios.get(`${API_URL}${menuType[data.movieId].path}?api_key=${API_KEY}&language=ko-KR&page=${data.page}`);
}

function* addMovies(action) {
  try{
    const result = yield call(addMoviesAPI, action.data);
    yield put({
      type: ADD_MOVIES_SUCCESS,
      data: result.data.results,
      movieId: action.data.movieId,
      page: action.data.page
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: ADD_MOVIES_FAILURE,
      error: err.response.data,
    })
  }
}

function* backgroundImage(action) {
  try{
    yield put({
      type: BACKGROUND_IMAGE_SUCCESS,
      data: action.data,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: BACKGROUND_IMAGE_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLoadMovies() {
  yield takeLatest(LOAD_MOVIES_REQUEST, loadMovies);
}

function* watchAddMovies() {
  yield takeLatest(ADD_MOVIES_REQUEST, addMovies);
}

function* watchBackgroundImage() {
  yield takeLatest(BACKGROUND_IMAGE_REQUEST, backgroundImage);
}

export default function* movieSaga() {
  yield all([
    fork(watchLoadMovies),
    fork(watchAddMovies),
    fork(watchBackgroundImage),
  ])
}