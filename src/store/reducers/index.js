import { combineReducers } from 'redux';
import movie from './movie';
import home from './home';
import about from './about';
import search from './search';

const rootReducer = combineReducers({
  movie,
  home,
  about,
  search,
});
export default rootReducer;