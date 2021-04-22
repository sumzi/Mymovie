import produce from 'immer';

const initialState = {
  movies: [{
    id: '1',
    title: '위플래쉬',
    poster_path: '/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg',
    backdrop_path: '/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg',
  },{
    id: '2',
    title: '위플래쉬',
    poster_path: '/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg',
    backdrop_path: '/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg',
  },{
    id: '3',
    title: '위플래쉬',
    poster_path: null,
    backdrop_path: '/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg',
  }],
  likeMovieLoading: false,
  likeMovieDone: false,
  likeMovieError: null,
  unlikeMovieLoading: false,
  unlikeMovieDone: false,
  unlikeMovieError: null,
};

export const LIKE_MOVIE_REQUEST = "LIKE_MOVIE_REQUEST";
export const LIKE_MOVIE_SUCCESS = "LIKE_MOVIE_SUCCESS";
export const LIKE_MOVIE_FAILURE = "LIKE_MOVIE_FAILURE";

export const UNLIKE_MOVIE_REQUEST = "UNLIKE_MOVIE_REQUEST";
export const UNLIKE_MOVIE_SUCCESS = "UNLIKE_MOVIE_SUCCESS";
export const UNLIKE_MOVIE_FAILURE = "UNLIKE_MOVIE_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LIKE_MOVIE_REQUEST:
        draft.likeMovieLoading = true;
        draft.likeMovieDone = false;
        draft.likeMovieError = null;
        break;
      case LIKE_MOVIE_SUCCESS: {
        draft.likeMovieLoading = false;
        draft.likeMovieDone = true;
        draft.movies.push({
          id: action.data.id,
          title: action.data.title,
          poster_path: action.data.poster_path,
          backdrop_path: action.data.backdrop_path,
        })
        break;
      }
      case LIKE_MOVIE_FAILURE:
        draft.likeMovieLoading = false;
        draft.likeMovieError = action.error;
        break;
      case UNLIKE_MOVIE_REQUEST:
        draft.unlikeMovieLoading = true;
        draft.unlikeMovieDone = false;
        draft.unlikeMovieError = null;
        break;
      case UNLIKE_MOVIE_SUCCESS: {
        draft.unlikeMovieLoading = false;
        draft.unlikeMovieDone = true;
        const movie = draft.movies.filter((v) => v.id !== action.data);
        draft.movies = movie;
        break;
      }
      case UNLIKE_MOVIE_FAILURE:
        draft.unlikeMovieLoading = false;
        draft.unlikeMovieError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;