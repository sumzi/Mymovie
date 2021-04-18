import produce from "immer";

const initialState = {
  movie: {},
  detailMovieLoading: false,
  detailMovieDone: false,
  detailMovieError: null,
};

export const DETAIL_MOVIE_REQUEST = "DETAIL_MOVIE_REQUEST";
export const DETAIL_MOVIE_SUCCESS = "DETAIL_MOVIE_SUCCESS";
export const DETAIL_MOVIE_FAILURE = "DETAIL_MOVIE_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DETAIL_MOVIE_REQUEST:
        draft.detailMovieLoading = true;
        draft.detailMovieDone = false;
        draft.detailMovieError = null;
        break;
      case DETAIL_MOVIE_SUCCESS: {
        draft.detailMovieLoading = false;
        draft.detailMovieDone = true;
        draft.movie = action.data;
        break;
      }
      case DETAIL_MOVIE_FAILURE:
        draft.detailMovieLoading = false;
        draft.detailMovieError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;