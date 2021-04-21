import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
  DETAIL_MOVIE_FAILURE,
} from '../reducers/about';
import  { API_URL, API_KEY, YOUTUBE_PATH } from '../../Config';

const getMovieDetail = async (id)=> {
  const result = await axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}&language=ko-KR`);
  let genres = '';
  const genreList = result.data.genres.map(genre => genre.name);
  if (result.data.genres.length > 3) {
    genreList.splice(3);
  }
  genres = genreList.join(' | ');
  return {
    id: id,
    release_date: result.data.release_date,
    title: result.data.title,
    originalTitle: result.data.original_title,
    tagline: result.data.tagline,
    runtime: `${result.data.runtime} 분`,
    rating: result.data.vote_average,
    genres,
    overview: result.data.overview,
    poster_path: result.data.poster_path,
    backdrop_path: result.data.backdrop_path,
  };
}
const getMovieImage = async (id)=> {
  const result = await axios.get(`${API_URL}movie/${id}/images?api_key=${API_KEY}`);
  const images = result.data.backdrops.map(backdrop => backdrop.file_path)
  return images;
}
const getMovieVideo = async (id)=> {
  const result = await axios.get(`${API_URL}movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`);
  const youtubeVideos = result.data.results.filter(video => video.site === 'YouTube');
  const videos = youtubeVideos.map(video => ({
    path: video.key,
  }))
  return videos;
}
const getMovieCast = async (id)=> {
  const result = await axios.get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`);
  const casts = result.data.cast.map(cast => {
    return {
      name: cast.name,
      role: cast.character,
      profile: cast.profile_path,
    }
  });
  return casts
}
async function detailMovieAPI(data) {
  const movieDetails = await getMovieDetail(data);
  const movieImages = await getMovieImage(data);
  const movieVideos = await getMovieVideo(data);
  const movieCasts = await getMovieCast(data);

  const movie = {};
  Object.assign(movie,movieDetails);
  movie.images = movieImages;
  movie.casts = movieCasts;
  movie.videos = movieVideos;
  return movie;
}

function* detailMovie(action) {
  try{
    const result = yield call(detailMovieAPI, action.data);
    yield put({
      type: DETAIL_MOVIE_SUCCESS,
      data: result,
    })
  } catch(err) {
    console.error(err);
    yield put({
      type: DETAIL_MOVIE_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchDetailMovie() {
  yield takeLatest(DETAIL_MOVIE_REQUEST, detailMovie);
}

export default function* aboutSaga() {
  yield all([
    fork(watchDetailMovie),
  ])
}