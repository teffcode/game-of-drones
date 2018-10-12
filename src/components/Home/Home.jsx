import React, { Component } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  align-items: center;
  background-color: pink;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0px 15px;
  widht: 100vw;
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

class Home extends Component {
  render() {
    return (
      <HomeContainer>
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
      </HomeContainer>
    );
  }
}

export default Home;