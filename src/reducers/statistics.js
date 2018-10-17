import { FETCH_STATISTICS, RESET_STATISTICS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STATISTICS:
      return [...state, ...action.payload.data];
    case RESET_STATISTICS:
      return state;
    default:
      return state;
  }
}