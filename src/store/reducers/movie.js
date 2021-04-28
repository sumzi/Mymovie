import produce from "immer";

const initialState = {
  movies: [],
  movieId: 0,
  page: 1,
  hasMoreMovies: true,
  backgroundImage: "",
  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
  addMoviesLoading: false,
  addMoviesDone: false,
  addMoviesError: null,
  backgroundImageLoading: false,
  backgroundImageDone: false,
  backgroundImageError: null,
};

export const LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";

export const ADD_MOVIES_REQUEST = "ADD_MOVIES_REQUEST";
export const ADD_MOVIES_SUCCESS = "ADD_MOVIES_SUCCESS";
export const ADD_MOVIES_FAILURE = "ADD_MOVIES_FAILURE";

export const BACKGROUND_IMAGE_REQUEST = "BACKGROUND_IMAGE_REQUEST";
export const BACKGROUND_IMAGE_SUCCESS = "BACKGROUND_IMAGE_SUCCESS";
export const BACKGROUND_IMAGE_FAILURE = "BACKGROUND_IMAGE_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MOVIES_REQUEST:
        draft.loadMoviesLoading = true;
        draft.loadMoviesDone = false;
        draft.loadMoviesError = null;
        break;
      case LOAD_MOVIES_SUCCESS: {
        draft.loadMoviesLoading = false;
        draft.loadMoviesDone = true;
        draft.movieId = parseInt(action.movieId);
        draft.movies = action.data;
        draft.page = 1;
        draft.hasMoreMovies = true;
        draft.backgroundImage = action.data[0].backdrop_path;
        break;
      }
      case LOAD_MOVIES_FAILURE:
        draft.loadMoviesLoading = false;
        draft.loadMoviesError = action.error;
        break;
      case ADD_MOVIES_REQUEST:
        draft.addMoviesLoading = true;
        draft.addMoviesDone = false;
        draft.addMoviesError = null;
        break;
      case ADD_MOVIES_SUCCESS: {
        draft.addMoviesadding = false;
        draft.addMoviesDone = true;
        draft.page = action.page;
        draft.movies = draft.movies.concat(action.data);
        draft.hasMoreMovies = draft.page < 4;
        break;
      }
      case ADD_MOVIES_FAILURE:
        draft.loadMoviesLoading = false;
        draft.loadMoviesError = action.error;
        break;
      case BACKGROUND_IMAGE_REQUEST:
        draft.backgroundImageLoading = true;
        draft.backgroundImageDone = false;
        draft.backgroundImageError = null;
        break;
      case BACKGROUND_IMAGE_SUCCESS: {
        draft.backgroundImageLoading = false;
        draft.backgroundImageDone = true;
        draft.backgroundImage = action.data;
        break;
      }
      case BACKGROUND_IMAGE_FAILURE:
        draft.backgroundImageLoading = false;
        draft.backgroundImageError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
