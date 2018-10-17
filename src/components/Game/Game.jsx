import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import { statistics as statisticsServices } from '../../services';
import { gameUtils } from '../../utils';
import { resetStatistics, playGame, resetGame } from '../../actions';
import Window from '../Window/Window';
import { 
  PrincipalTitle, 
  Button, 
  GameContainer,
  RoundTitle,
  RoundTitleTwo,
  PlayerOneContent,
  PlayerTwoContent,
  SelectStyled,
  ReactModalStyled
} from '../Styled/Styled';

ReactModal.setAppElement('#root');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedOptionPlayer1: {
        value: ''
      },
      selectedOptionPlayer2: {
        value: undefined,
      },
      titleModal: 'Hi',
      roundWinner: '',
      roundDefeat: '',
      gameWinner: '',
      openWindowPlayer1: true,
      openWindowPlayer2: true
    }
  }

  componentDidUpdate() {
    const { resetStatistics, resetGame, game, players } = this.props;
    // Validate if game winner exists
    if (game.player1 >= 3) {
      statisticsServices.notifyGame('player1', 'wins');
      statisticsServices.notifyGame('player2', 'defeats');
      this.setState((prevState) => {
        return {
          ...prevState,
          titleModal: `🏆 ${players.player1} wins 🏆`,
          roundWinner: '',
          roundDefeat: '',
          gameWinner: '',
        }
      });
      // Dispatch action to reset statistics
      resetStatistics().then(() => console.log('Statistics reseted'));
      resetGame();
    } else if (game.player2 >= 3) {
      statisticsServices.notifyGame('player2', 'wins');
      statisticsServices.notifyGame('player1', 'defeats');
      this.setState((prevState) => {
        return {
          ...prevState,
          titleModal: `🏆 ${players.player2} wins 🏆`,
          roundWinner: '',
          roundDefeat: '',
          gameWinner: '',
        }
      });
      resetStatistics().then(() => console.log('Statistics reseted'));
      resetGame();
    }
  }

  goToStatistics = () => {
    this.props.history.push('/statistics')
  }

  goToHome = () => {
    this.props.history.push('/')
  }

  toggleWindowPlayer1 = () => {
    this.setState({
      openWindowPlayer1: !this.state.openWindowPlayer1
    });
  }

  toggleWindowPlayer2 = () => {
    this.setState({
      openWindowPlayer2: !this.state.openWindowPlayer2
    });
  }

  handleOpenModal = () => {
    const { players, playGame } = this.props;
    const {
      selectedOptionPlayer1,
      selectedOptionPlayer2,
      roundWinner,
      roundDefeat,
    } = this.state;
    this.setState((prevState) => {
      return {
        ...prevState,
        showModal: true,
    }});
    let message = '';
    let winner = '';
    const result = gameUtils.roundWinner(selectedOptionPlayer1.value, selectedOptionPlayer2.value);

    if (result === 'win') {
      winner = 'player1';
      message = `${players.player1} wins this battle 🎉`;
      playGame('player1');
    } else if (result === 'loose') {
      winner = 'player2';
      message = `${players.player2} wins this battle 🎉`;
      playGame('player2');
    } else {
      message = 'There is a tie 🙄';
    }

    this.setState((prevState) => {
      if (winner === 'player1') {
        return {
          ...prevState,
          titleModal: message,
          roundWinner: 'player1',
          roundDefeat: 'player2',
        }
      } else if (winner === 'player2') {
        return {
          ...prevState,
          titleModal: message,
          roundWinner: 'player2',
          roundDefeat: 'player1',
        }
      }
      return {
        ...prevState,
        titleModal: message,
        roundWinner: '',
        roundDefeat: '',
      }
    });
    if (roundWinner !== '') {
      statisticsServices.notifyRound(roundWinner, 'wins');
      statisticsServices.notifyRound(roundDefeat, 'defeats');
    }
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleChangeOptionPlayer1 = (selectedOptionPlayer1) => {
    this.setState({ selectedOptionPlayer1 });
  }

  handleChangeOptionPlayer2 = (selectedOptionPlayer2) => {
    this.setState({ selectedOptionPlayer2 });
  }

  render() {
    const { 
      titleModal, 
      openWindowPlayer1,
      openWindowPlayer2,
    } = this.state;
    const { players } = this.props;
  
    const options = [
      { value: 'rock', label: 'Rock' },
      { value: 'paper', label: 'Paper' },
      { value: 'scissor', label: 'Scissor' }
    ]

    return (
      <GameContainer id="main">
        <ReactModalStyled 
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={{
            overlay: {
              backgroundColor: 'transparent',
              zIndex: '3'
            }
          }}
        >
          <PrincipalTitle blue>{titleModal}</PrincipalTitle>
          <Button onClick={this.handleCloseModal}>OK</Button>
        </ReactModalStyled>
        <RoundTitle>
          <PrincipalTitle blue>Round</PrincipalTitle>
          <Button onClick={this.handleOpenModal}>Play</Button>
          <Button onClick={this.goToStatistics}>Score</Button>
          <Button onClick={this.goToHome}>Back</Button>
        </RoundTitle>
        <RoundTitleTwo>
          <PrincipalTitle blue>Round</PrincipalTitle>
          <Button onClick={this.handleOpenModal}>Play</Button>
          <Button onClick={this.goToStatistics}>Score</Button>
          <Button onClick={this.goToHome}>Back</Button>
        </RoundTitleTwo>
        <PlayerOneContent>
          <Window 
            openWindow={openWindowPlayer1} 
            toggleWindow={this.toggleWindowPlayer1}
            playerName={players.player1}
            purple
          >
            <SelectStyled options={options} onChange={this.handleChangeOptionPlayer1}></SelectStyled>
          </Window>
        </PlayerOneContent>
        <PlayerTwoContent>
          <Window 
            openWindow={openWindowPlayer2} 
            toggleWindow={this.toggleWindowPlayer2}
            playerName={players.player2}
          >
            <SelectStyled options={options} onChange={this.handleChangeOptionPlayer2}></SelectStyled>
          </Window>
        </PlayerTwoContent>
      </GameContainer>
    );
  }
}

function mapStateToProps({ players, game }) {
  return {
    players,
    game,
  }
}

export default connect(mapStateToProps, {
  resetStatistics,
  playGame,
  resetGame,
})(Game);