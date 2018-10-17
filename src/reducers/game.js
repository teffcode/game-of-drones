import { PLAY_GAME, RESET_GAME } from '../actions/types'

const initialState = {
  player1: 0,
  player2: 0,
}
export default function(state = initialState, action) {
  switch(action.type) {
    case PLAY_GAME:
      const newWinner = { [action.payload]: state[action.payload] + 1 }
      console.log('NEW WINNER IN REDUCER: ', newWinner);
      return {...state, ...newWinner };
    case RESET_GAME:
      return { ...initialState };
    default:
      return state;
  }
}