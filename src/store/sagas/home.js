import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  HOME_MOVIE_REQUEST,
  HOME_MOVIE_SUCCESS,
  HOME_MOVIE_FAILURE,  
} from '../reducers/home';
import { API_URL, API_KEY } from '../../Config';

function getMoviesAPI(){
  return axios.get(`${API_URL}trending/movie/week?api_key=${API_KEY}&language=ko-KR`);
}
function homeMovieAPI(data){
  return axios.get(`${API_URL}movie/${data}?api_key=${API_KEY}&language=ko-KR`);
}
function* homeMovie(action) {
  try{
    const movies = yield call(getMoviesAPI);
    const num = Math.floor(Math.random()*20);
    const result = yield call(homeMovieAPI, movies.data.results[num].id );
    yield put({
      type:  HOME_MOVIE_SUCCESS,
      data: {
        id: result.data.id,
        title: result.data.title,
        backdrop_path: result.data.backdrop_path,
        tagline: result.data.tagline,
      }
    })
  }catch(err) {
    console.error(err);
    yield put({
      type: HOME_MOVIE_FAILURE,
      error: err.response.data
    })
  }
}

function* watchHomeMovie(){
  yield takeLatest(HOME_MOVIE_REQUEST, homeMovie);
}

export default function* homeSaga() {
  yield all([
    fork(watchHomeMovie),
  ])
}