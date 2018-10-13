import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';

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
  background-color: transparent;
  border: 4px solid ${({pink}) => (pink ? '#EE3DA5' : '#4927F1')};
  border-radius: 5px;
  color: ${({pink}) => (pink ? '#EE3DA5' : '#4927F1')};
  cursor: pointer;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  height: 40px;
  letter-spacing: 1px;
  outline: none;
  text-align: center;
  text-transform: uppercase;
  width: 100px;
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    font-size: 15px;
    height: 30px;
    width: 85px;
  }
`

export const PrincipalTitle = styled.h1`
  color: ${({blue}) => (blue ? '#4927F1' : 'white')};
  font-size: 35px;
  margin: 0;
  text-align: center;
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    font-size: 25px;
  }
`

const InputContainer = styled.div`
  color: white;
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
  background-color: transparent;  
  border: 4px solid white;
  border-radius: 5px;
  color: #4927f1;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  margin: 8px 0px;
  outline: none;
  padding: 10px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const move = keyframes`
  from {
    bottom: 0;
    position: absolute;
  }
  to {
    bottom: 110%;
    position: absolute;
  }
`

const points = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right;
  }
`

const Ball = styled.div `
  animation-name: ${points}, ${move};
  animation-duration: .8s, 5s;
  animation-fill-mode: forwards;
  animation-timing-function: steps(28), linear;
  animation-iteration-count: infinite, 1;

  background-color: #4927F1;
  border-radius: 50%;
  bottom: -100px;
  display: inline-block;
  height: 30px;
  position: fixed;
  width: 30px;
`

const Animation = styled.div `
  background-image: linear-gradient(to bottom left, #EE3DA5, #FEC76D);
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`

class Home extends Component {

  goToGame = () => {
    this.props.history.push('/game')
  }

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
            <div>
              <Label>Player 1 <span role="img" aria-label="hand">👉🏼 </span></Label>
              <Input type="text" name="name" placeholder="Player 1 name"></Input>
            </div>
            <div>
              <Label>Player 2 <span role="img" aria-label="hand">👉🏾</span></Label>
              <Input type="text" name="name" placeholder="Player 2 name"></Input>
            </div>
          </InputContainer>
          <Button onClick={this.goToGame}>Start</Button>
        </HomeText>
      </HomeContainer>
    );
  }
}

export default withRouter(Home);