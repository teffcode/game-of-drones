const gameRules = {
    rock: { scissor: 'win', paper: 'loose' },
    paper: { scissor: 'loose', rock: 'win' },
    scissor: { paper: 'win', rock: 'loose' },
};
  
const roundWinner = function (player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return 'tie';
    return gameRules[player1Choice][player2Choice];
}
  
export { roundWinner }; 