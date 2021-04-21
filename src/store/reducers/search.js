import produce from 'immer';

const initialState = {
  movies: [],
  searchMoviesLoading: false,
  searchMoviesDone: false,
  searchMoviesError: null,
};

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST";
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS";
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE";

export const INIT_SEARCH_MOVIES = "INIT_SEARCH_MOVIES";

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      draft.searchMoviesLoading = true;
      draft.searchMoviesDone = false;
      draft.searchMoviesError = null;
      break;
    case SEARCH_MOVIES_SUCCESS:
      draft.searchMoviesLoading = false;
      draft.searchMoviesDone = true;
      draft.movies = action.data;
      break;
    case SEARCH_MOVIES_FAILURE:
      draft.searchMoviesLoading = false;
      draft.searchMoviesError = action.error;
      break;
    case INIT_SEARCH_MOVIES:
      draft.movies = [];
      break;
    
    default:
      break;
  }
});

export default reducer;