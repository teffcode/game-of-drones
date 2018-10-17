import {
  FETCH_STATISTICS,
  SET_PLAYERS,
  RESET_STATISTICS,
  PLAY_GAME,
  RESET_GAME,
  CLEAN_STATISTICS,
} from './types';
import { statistics as statisticsServices } from '../services';

export function fetchStatistics() {
  const playerStatistics = statisticsServices.readStatistics();

  return {
    type: FETCH_STATISTICS,
    payload: playerStatistics,
  }
}

export function setPlayers(player1, player2) {
  return {
    type: SET_PLAYERS,
    payload: { player1, player2 },
  }
}

export async function resetStatistics() {
  await statisticsServices.resetStatistics();

  return {
    type: RESET_STATISTICS,
  }
}

export function playGame(winner) {
  return {
    type: PLAY_GAME,
    payload: winner,
  }
}

export function resetGame() {
  return {
    type: RESET_GAME,
  }
}
