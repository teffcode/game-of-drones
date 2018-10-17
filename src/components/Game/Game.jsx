import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import { statistics as statisticsServices } from '../../services';
import Window from '../Window/Window';
import { 
  PrincipalTitle, 
  Button, 
  GameContainer,
  RoundTitle,
  RoundTitleTwo,
  PlayerOneContent,
  PlayerTwoContent,
  StarsContent,
  SelectStyled,
  ReactModalStyled
} from '../Styled/Styled';

ReactModal.setAppElement('#root');

class Game extends Component {

  state = {
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
    player1: {
      wins: 0,
      defeats: 0,
    },
    player2: {
      wins: 0,
      defeats: 0,
    },
    openWindow: true
  }

  goToStatistics = () => {
    this.props.history.push('/statistics')
  }

  goToHome = () => {
    this.props.history.push('/')
  }

  toggleWindow = () => {
    this.setState({
      openWindow: !this.state.openWindow
    });
  }

  handleOpenModal = () => {
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
    let message = 'There is a tie 🙄';
    let winner = '';

    if(selectedOptionPlayer1.value === 'rock' && selectedOptionPlayer2.value === 'paper') {
      message = 'Player 2 wins this battle 🎉';
      winner = 'player2';
    } else if(selectedOptionPlayer1.value === 'rock' && selectedOptionPlayer2.value === 'scissor') {
      message = 'Player 1 wins this battle 🎉';
      winner = 'player1';
    } else if(selectedOptionPlayer1.value === 'paper' && selectedOptionPlayer2.value === 'rock') {
      message = 'Player 1 wins this battle 🎉';
      winner = 'player1';
    } else if(selectedOptionPlayer1.value === 'paper' && selectedOptionPlayer2.value === 'scissor') {
      message = 'Player 2 wins this battle 🎉';
      winner = 'player2';
    } else if(selectedOptionPlayer1.value === 'scissor' && selectedOptionPlayer2.value === 'rock') {
      message = 'Player 2 wins this battle 🎉';
      winner = 'player2';
    } else if(selectedOptionPlayer1.value === 'scissor' && selectedOptionPlayer2.value === 'paper') {
      message = 'Player 1 wins this battle 🎉';
      winner = 'player1';
    }

    this.setState((prevState) => {
      if (winner === 'player1') {
        return {
          ...prevState,
          titleModal: message,
          roundWinner: 'player1',
          roundDefeat: 'player2',
          player1: {
            ...prevState.player1,
            wins: prevState.player1.wins + 1,
          },
          player2: {
            ...prevState.player2,
            defeats: prevState.player2.defeats + 1,
          },
        }
      } else if (winner === 'player2') {
        return {
          ...prevState,
          titleModal: message,
          roundWinner: 'player2',
          roundDefeat: 'player1',
          player1: {
            ...prevState.player1,
            defeats: prevState.player1.defeats + 1,
          },
          player2: {
            ...prevState.player2,
            wins: prevState.player2.wins + 1,
          },
        }
      }
      return {
        ...prevState,
        titleModal: message,
        roundWinner: '',
        roundDefeat: '',
      }
    });

    // Notify to statistics
    if (roundWinner !== '') {
      statisticsServices.notifyRound(roundWinner, 'wins');
      statisticsServices.notifyRound(roundDefeat, 'defeats');
    }
    if (this.state.player1.wins >= 3) {
      statisticsServices.notifyGame('player1', 'wins');
      statisticsServices.notifyGame('player2', 'defeats');
      this.setState((prevState) => {
        return {
          ...prevState,
          titleModal: '🏆 Player 1 wins 🏆',
          roundWinner: '',
          roundDefeat: '',
          gameWinner: '',
          player1: {
            wins: 0,
            defeats: 0,
          },
          player2: {
            wins: 0,
            defeats: 0,
          },
        }
      });
    } else if (this.state.player2.wins >= 3) {
      statisticsServices.notifyGame('player2', 'wins');
      statisticsServices.notifyGame('player1', 'defeats');
      this.setState((prevState) => {
        return {
          ...prevState,
          titleModal: '🏆 Player 2 wins 🏆',
          roundWinner: '',
          roundDefeat: '',
          gameWinner: '',
          player1: {
            wins: 0,
            defeats: 0,
          },
          player2: {
            wins: 0,
            defeats: 0,
          },
        }
      });
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
    const { titleModal, openWindow } = this.state;
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
          <Button pink onClick={this.handleCloseModal}>OK</Button>
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
          <PrincipalTitle>{players.player1}</PrincipalTitle>
          <Window openWindow={openWindow} toggleWindow={this.toggleWindow}>
            <SelectStyled options={options} onChange={this.handleChangeOptionPlayer1}></SelectStyled>
          </Window>
        </PlayerOneContent>
        <PlayerTwoContent>
          <PrincipalTitle>{players.player2}</PrincipalTitle>
          <Window openWindow={openWindow} toggleWindow={this.toggleWindow}>
            <SelectStyled options={options} onChange={this.handleChangeOptionPlayer2}></SelectStyled>
          </Window>
        </PlayerTwoContent>
      </GameContainer>
    );
  }
}

function mapStateToProps({ players }) {
  return {
    players,
  }
}

export default connect(mapStateToProps)(Game);