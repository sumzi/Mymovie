import { combineReducers } from 'redux';
import movie from './movie';
import home from './home';
const rootReducer = combineReducers({
  movie,
  home,
});
export default rootReducer;