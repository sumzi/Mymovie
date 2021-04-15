import produce from 'immer';

const initialState = {
  likes: [{
    id: '581734',
    title: '노매드랜드',
  }],
  movies: [],
  movieType: '',
  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
};

export const LOAD_MOVIES_REQUEST = 'LOAD_MOVIES_REQUEST';
export const LOAD_MOVIES_SUCCESS = 'LOAD_MOVIES_SUCCESS';
export const LOAD_MOVIES_FAILURE = 'LOAD_MOVIES_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MOVIES_REQUEST:
      draft.loadMoviesLoading = true;
      draft.loadMoviesDone = false;
      draft.loadMoviesError = null;
      break;
    case LOAD_MOVIES_SUCCESS:{
      draft.loadMoviesLoading = false;
      draft.loadMoviesDone = true;
      draft.movieType = action.movieType;
      draft.movies = {...action.data};
      break;}
    case LOAD_MOVIES_FAILURE:
      draft.loadMoviesLoading = false;
      draft.loadMoviesError = action.error;
      break;
    default:
      break;
  };
});

export default reducer;