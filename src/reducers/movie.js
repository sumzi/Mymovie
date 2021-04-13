import produce from 'immer';

export const initialState = {
  popularMovies: [],
  likeMovies: [],
  addMovieLoading: false,
  addMovieDone: false,
  addMovieError: false
};

const LOAD_MOVIE_REQUEST = 'LOAD_MOVIE_REQUEST';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MOVIE_REQUEST:
      
      break;
    default:
      break;
  };
});

export default reducer;