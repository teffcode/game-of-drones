import { FETCH_STATISTICS, SET_PLAYERS } from './types';
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