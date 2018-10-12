import React, { Component } from 'react';
import styled from 'styled-components';
import Select from 'react-select'

import { PrincipalTitle, Button } from '../Home/Home';

const GameContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
`

const RoundTitle = styled.div`
  align-items: center;
  background-color: white;
  color: black;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  margin: auto;
  position: absolute;
  width: 100vw;
  z-index: 2;
  // iPad Pro
  @media (max-width: 1024px) {
    top: 47vh;
  }
`

const PlayerOneContent = styled.div`
  align-items: center;
  background-color: #E74667;
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
    height: 50vh;
    width: 100vw;
  }
`

const PlayerTwoContent = styled.div`
  align-items: center;
  background-color: #5B3ED7;
  display: flex;
  flex-direction: column;  
  height: 100vh;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 50vw;
  // iPad Pro
  @media (max-width: 1024px) {
    height: 50vh;
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

class Game extends Component {
  render() {
    const options = [
      { value: 'rock', label: 'Rock' },
      { value: 'paper', label: 'Paper' },
      { value: 'scissor', label: 'Scissor' }
    ]

    return (
      <GameContainer>
        <RoundTitle>
          <PrincipalTitle black>Round</PrincipalTitle>
          <Button>Score</Button>
        </RoundTitle>
        <PlayerOneContent>
          <StarsContent>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <SelectStyled options={options}></SelectStyled>
        </PlayerOneContent>
        <PlayerTwoContent>
          <StarsContent>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <SelectStyled options={options}></SelectStyled>
        </PlayerTwoContent>
      </GameContainer>
    );
  }
}

export default Game;