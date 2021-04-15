import produce from 'immer';

const initialState = {  
  homeMovieLoading: false,
  homeMovieDone: false,
  homeMovieError: null,
  homeMovie: {
    id:'',
    title:'',
    backdrop_path:'',
    tagline:'',
  },
};

export const HOME_MOVIE_REQUEST = 'HOME_MOVIE_REQUEST';
export const HOME_MOVIE_SUCCESS = 'HOME_MOVIE_SUCCESS';
export const HOME_MOVIE_FAILURE = 'HOME_MOVIE_FAILURE';

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
      draft.homeMovie =  {...action.data}
      break;
    case HOME_MOVIE_FAILURE:
      draft.homeMovieLoading = false;
      draft.homeMovieError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;