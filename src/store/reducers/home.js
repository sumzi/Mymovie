import produce from 'immer';

const initialState = { 
  movies: [], 
  darkMode : 0,
  homeMovieLoading: false,
  homeMovieDone: false,
  homeMovieError: null,
  changeModeLoading: false,
  changeModeDone: false,
  changeModeError: null,
  
};

export const HOME_MOVIE_REQUEST = 'HOME_MOVIE_REQUEST';
export const HOME_MOVIE_SUCCESS = 'HOME_MOVIE_SUCCESS';
export const HOME_MOVIE_FAILURE = 'HOME_MOVIE_FAILURE';

export const CHANGE_MODE_REQUEST = 'CHANGE_MODE_REQUEST';
export const CHANGE_MODE_SUCCESS = 'CHANGE_MODE_SUCCESS';
export const CHANGE_MODE_FAILURE = 'CHANGE_MODE_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case HOME_MOVIE_REQUEST:
      draft.homeMovieLoading = true;
      draft.homeMovieDone = false;
      draft.homeMovieError = null;
      break;
    case HOME_MOVIE_SUCCESS:
      draft.homeMovieLoading = false;
      draft.homeMovieDone = true;
      draft.movies = action.data;
      break;
    case HOME_MOVIE_FAILURE:
      draft.homeMovieLoading = false;
      draft.homeMovieError = action.error;
      break;
    case CHANGE_MODE_REQUEST:
      draft.changeModeLoading = true;
      draft.changeModeDone = false;
      draft.changeModeError = null;
      break;
    case CHANGE_MODE_SUCCESS:
      draft.changeModeLoading = false;
      draft.changeModeDone = true;
      draft.darkMode = action.data;
      break;
    case CHANGE_MODE_FAILURE:
      draft.changeModeLoading = false;
      draft.changeModeError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;