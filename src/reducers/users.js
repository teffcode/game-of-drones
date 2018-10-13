import { SET_PLAYERS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_PLAYERS:

      return { ...action.payload }
    default:
      return state;
  }

}