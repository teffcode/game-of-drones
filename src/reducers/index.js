import { combineReducers } from 'redux';

import statistics from './statistics';
import players from './users';

export default combineReducers({
  statistics,
  players,
});
