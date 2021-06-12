import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { catReducer } from './catReducer';
import { favouriteReducer } from './favouriteReducer';
import { voteReducer } from './voteReducer';

export default combineReducers({
  cats: catReducer,
  favourites: favouriteReducer,
  votes: voteReducer,
  alert: alertReducer
});
