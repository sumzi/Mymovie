import { combineReducers } from 'redux';
import movie from './movie';
import home from './home';
import about from './about';
import search from './search';
import like from './like';

const rootReducer = combineReducers({
  movie,
  home,
  about,
  search,
  like,
});
export default rootReducer;