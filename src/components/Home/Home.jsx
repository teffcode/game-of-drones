import React, { Component } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

const HomeText = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: auto;
`

export const Button = styled.button`
  background-color: ${({pink}) => (pink ? '#F7CBF4' : '#85D3F0')};
  border: 4px solid ${({pink}) => (pink ? '#F061E7' : '#25BAF0')};
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  height: 40px;
  letter-spacing: 1px;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  width: 120px;
`

export const PrincipalTitle = styled.h1`
  color: ${({black}) => (black ? '#333' : 'white')};
  font-size: 35px;
  margin: 0;
  text-align: center;
`

export const SecondaryTitle = styled.h2`
  color: white;
  letter-spacing: 1px;
  margin: 8px 0px;
  text-align: center;
`

const InputContainer = styled.div`
  margin: 30px 0px;
`;

const Label = styled.label`
  font-size: 22px;
  padding: 10px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  margin: 8px 0px;
  outline: none;
  padding: 10px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const Ball = styled.div `
  animation-name: points, move;
  animation-duration: .8s, 5s;
  animation-fill-mode: forwards;
  animation-timing-function: steps(28), linear;
  animation-iteration-count: infinite, 1;

  background-color: yellow;
  border-radius: 50%;
  bottom: -100px;
  box-shadow: 0 5px 10px black, 0 3px 3px black;
  display: inline-block;
  height: 30px;
  position: fixed;
  width: 30px;

  @keyframes move {
    from {
      bottom: 0;
      position: absolute;
    }
    to {
      bottom: 110%;
      position: absolute;
    }
  }
  
  @keyframes points {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: right;
    }
  }
`

const Animation = styled.div `
  background-color: pink;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`

class Home extends Component {

  renderAnimation = () => {
    const balls = new Array(200).fill({})

    return (
      balls.map((element, index) => {
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + "px",
          animationDelay: Math.floor((Math.random() * (80000 - 0))) + "ms"
        }
        return(
          <Ball key={index} style={style}></Ball>
        );
      })
    );
  }  

  render() {
    return (
      <HomeContainer>
        <Animation>{ this.renderAnimation() }</Animation>
        <HomeText>
          <PrincipalTitle>Game of Drones</PrincipalTitle>
          <InputContainer>
            <SecondaryTitle>Enter Player's Names</SecondaryTitle>
            <div>
              <Label>Player 1 <span role="img" aria-label="hand">👉🏼</span></Label>
              <Input type="text" name="name" placeholder="Player 1 name"></Input>
            </div>
            <div>
              <Label>Player 2 <span role="img" aria-label="hand">👉🏼</span></Label>
              <Input type="text" name="name" placeholder="Player 2 name"></Input>
            </div>
          </InputContainer>
          <Button>Start</Button>
        </HomeText>
      </HomeContainer>
    );
  }
}

export default Home;