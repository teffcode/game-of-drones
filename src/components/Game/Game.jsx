import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

import { PrincipalTitle, Button } from '../Home/Home';

const GameContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`

export const RoundTitle = styled.nav`
  align-items: center;
  background-color: white;
  color: black;
  display: flex;
  height: 80px;
  justify-content: space-evenly;
  margin: auto;
  position: absolute;
  width: 100vw;
  z-index: 2;
  // iPad Pro
  @media (max-width: 1024px) {
    height: 50px;
    bottom: 0;
  }
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    height: 40px;
  }
`

const RoundTitleTwo = styled(RoundTitle)`
  display: none;
  // iPad Pro
  @media (max-width: 1024px) {
    bottom: 100%;
    display: flex;
    height: 50px;
    top: 50px;
    transform: rotate(180deg);
  }
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    height: 40px;
    top: 40px;
  }
`

const PlayerOneContent = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom left, #4927f1, #FDCDD1);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 50vw;
  // iPad Pro
  @media (max-width: 1024px) {
    bottom: 0;
    height: calc(50vh - 80px);
    padding-bottom: 80px;
    width: 100vw;
  }
`

const PlayerTwoContent = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom left, #35EDAA, #4927F1);
  display: flex;
  flex-direction: column;  
  height: 100vh;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 50vw;
  // iPad Pro
  @media (max-width: 1024px) {
    height: calc(50vh - 80px);
    padding-bottom: 80px;
    top: 0;
    transform: rotate(180deg);
    font-size: 10px;
    width: 100vw;
  }
`

const StarsContent = styled.div `
  display: flex;
  margin-bottom: 35px;
  i {
    color: yellow;
    font-size: 40px;
    margin: 0px 5px;
    // iPhone 6/7/8 Plus
    @media (max-width: 414px) {
      font-size: 25px;
    }
  }
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    margin-bottom: 15px;
    margin-top: -50px;
  }
`

const SelectStyled = styled(Select) `
  cursor: pointer;
  font-size: 20px;
  margin-top: 40px;
  outline: none;
  width: 160px;
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    font-size: 15px;
    margin-top: 10px;
  }
  // Galaxy S5
  @media (max-width: 360px) {
    font-size: 12px;
  }
  // iPhone5/SE
  @media (max-width: 320px) {
    font-size: 10px;
  }
`

const ReactModalStyled = styled(ReactModal)`
  background: white;
  border-radius: 20px;
  bottom: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: center;
  left: 0;
  margin: auto;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  z-index: 3;
  button {
    margin-top: 30px;
  }
  @media (max-width: 1024px) {
    height: 40%;
    left: -15px;
    transform: rotate(-90deg);
    width: 110%;
  }
`
class Game extends Component {

  state = {
    show: false,
    selectedOptionPlayer1: null,
    selectedOptionPlayer2: null,
    titleModal: 'Hi'
  }

  goToStatistics = () => {
    this.props.history.push('/statistics')
  }

  handleOpenModal = () => {
    const { selectedOptionPlayer1, selectedOptionPlayer2 } = this.state;
    this.setState({ showModal: true });

    if(selectedOptionPlayer1.value === selectedOptionPlayer2.value) {
      this.setState({ titleModal: 'There is a tie 🙄' });
    } else if(selectedOptionPlayer1.value === 'rock' && selectedOptionPlayer2.value === 'paper') {
      this.setState({ titleModal: 'Player 2 wins this battle 🎉' });
    } else if(selectedOptionPlayer1.value === 'rock' && selectedOptionPlayer2.value === 'scissor') {
      this.setState({ titleModal: 'Player 1 wins this battle 🎉' });
    } else if(selectedOptionPlayer1.value === 'paper' && selectedOptionPlayer2.value === 'rock') {
      this.setState({ titleModal: 'Player 1 wins this battle 🎉' });
    } else if(selectedOptionPlayer1.value === 'paper' && selectedOptionPlayer2.value === 'scissor') {
      this.setState({ titleModal: 'Player 2 wins this battle 🎉' });
    } else if(selectedOptionPlayer1.value === 'scissor' && selectedOptionPlayer2.value === 'rock') {
      this.setState({ titleModal: 'Player 2 wins this battle 🎉' });
    } else if(selectedOptionPlayer1.value === 'scissor' && selectedOptionPlayer2.value === 'paper') {
      this.setState({ titleModal: 'Player 1 wins this battle 🎉' });
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
    const { titleModal } = this.state;
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
              backgroundColor: 'transparent'
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
        </RoundTitle>
        <RoundTitleTwo>
          <PrincipalTitle blue>Round</PrincipalTitle>
          <Button onClick={this.handleOpenModal}>Play</Button>
          <Button onClick={this.goToStatistics}>Score</Button>
        </RoundTitleTwo>
        <PlayerOneContent>
          <StarsContent>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <SelectStyled options={options} onChange={this.handleChangeOptionPlayer1}></SelectStyled>
        </PlayerOneContent>
        <PlayerTwoContent>
          <StarsContent>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <SelectStyled options={options} onChange={this.handleChangeOptionPlayer2}></SelectStyled>
        </PlayerTwoContent>
      </GameContainer>
    );
  }
}

export default withRouter(Game);