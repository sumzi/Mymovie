import { combineReducers } from 'redux';
import movie from './movie';
import home from './home';
import about from './about';

const rootReducer = combineReducers({
  movie,
  home,
  about,
});
export default rootReducer;