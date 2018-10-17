import { combineReducers } from 'redux';

import statistics from './statistics';
import players from './users';
import game from './game';

export default combineReducers({
  statistics,
  players,
  game,
});
