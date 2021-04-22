import { all, fork, put, takeLatest } from "redux-saga/effects";
import {
  LIKE_MOVIE_REQUEST,
  LIKE_MOVIE_SUCCESS,
  LIKE_MOVIE_FAILURE,
  UNLIKE_MOVIE_REQUEST,
  UNLIKE_MOVIE_SUCCESS,
  UNLIKE_MOVIE_FAILURE,
} from "../reducers/like";

function* likeMovie(action) {
  try{
    yield put({
      type: LIKE_MOVIE_SUCCESS,
      data: action.data,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: LIKE_MOVIE_FAILURE,
      error: err.response.data,
    })
  }
}

function* unlikeMovie(action) {
  try{
    yield put({
      type: UNLIKE_MOVIE_SUCCESS,
      data: action.data,
    });
  } catch(err) {
    console.error(err);
    yield put({
      type: UNLIKE_MOVIE_FAILURE,
      error: err.response.data,
    })
  }
}

function* watchLikeMovie() {
  yield takeLatest(LIKE_MOVIE_REQUEST, likeMovie);
}

function* watchUnlikeMovie() {
  yield takeLatest(UNLIKE_MOVIE_REQUEST, unlikeMovie);
}

export default function* likeSaga() {
  yield all([
    fork(watchLikeMovie),
    fork(watchUnlikeMovie),
  ])
}
