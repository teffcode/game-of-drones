import React, { Component } from 'react';
import styled from 'styled-components';

import { PrincipalTitle, Button } from '../Home/Home';

const GameContainer = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
`

const RoundContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 0px 0px 40px 40px;
  color: black;
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-around;
  left: 0;
  margin: auto;
  padding: 15px 0px;
  position: absolute;
  right: 0;
  top: 0;
  width: 500px;
  z-index: 2;
`

const PlayerOneContent = styled.div`
  align-items: center;
  background-color: #E74667;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0px 15px;
  position: absolute;
  width: 50vw;
`

const PlayerTwoContent = styled.div`
  align-items: center;
  background-color: #5B3ED7;
  display: flex;
  flex-direction: column;  
  height: 100vh;
  justify-content: center;
  padding: 0px 15px;
  position: absolute;
  right: 0;
  width: 50vw;
`

const StarsContent = styled.div `
  display: flex;
  margin-bottom: 35px;
  i {
    color: yellow;
    font-size: 40px;
    margin: 0px 5px;
  }
`

const Select = styled.select `
  display: flex;
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  height: 50px;
  margin: 40px 0px;
  outline: none;
  width: 150px;
`

class Game extends Component {
  render() {
    return (
      <GameContainer>
        <RoundContainer>
          <PrincipalTitle black>Round</PrincipalTitle>
          <Button>Score</Button>
        </RoundContainer>
        <PlayerOneContent>
          <StarsContent>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <Select>
            <option value="0">Select: </option>
            <option value="1">Rock</option>
            <option value="2">Paper</option>
            <option value="3">Scissor</option>
          </Select>
        </PlayerOneContent>
        <PlayerTwoContent>
          <StarsContent>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </StarsContent>
          <PrincipalTitle>Name</PrincipalTitle>
          <Select>
            <option value="0">Select: </option>
            <option value="1">Rock</option>
            <option value="2">Paper</option>
            <option value="3">Scissor</option>
          </Select>
        </PlayerTwoContent>
      </GameContainer>
    );
  }
}

export default Game;