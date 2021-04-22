import produce from "immer";

const initialState = {
  movies: [],
  movieType: "",
  backgroundImage: "",
  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
  backgroundImageLoading: false,
  backgroundImageDone: false,
  backgroundImageError: null,
};

export const LOAD_MOVIES_REQUEST = "LOAD_MOVIES_REQUEST";
export const LOAD_MOVIES_SUCCESS = "LOAD_MOVIES_SUCCESS";
export const LOAD_MOVIES_FAILURE = "LOAD_MOVIES_FAILURE";

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
        draft.movieType = action.movieType;
        draft.movies = action.data;
        draft.backgroundImage = action.data[0].backdrop_path;
        break;
      }
      case LOAD_MOVIES_FAILURE:
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
