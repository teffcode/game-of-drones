import axios from 'axios';

const notifyRound = (player, state) => axios.patch(`https://game-of-drones-api.herokuapp.com/statistics/${player}/rounds`, { state })
  .then((res) => res.data);

const notifyGame = (player, state) => axios.patch(`https://game-of-drones-api.herokuapp.com/statistics/${player}/games`, { state })
  .then((res) => res.data);

const readStatistics = () => axios.get('https://game-of-drones-api.herokuapp.com/statistics')
  .then((res) => res.data);

const resetStatistics = () => axios.patch('https://game-of-drones-api.herokuapp.com/statistics/reset')
  .then((res) => res);

export default {
  notifyRound,
  notifyGame,
  readStatistics,
  resetStatistics,
}