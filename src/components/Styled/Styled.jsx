import styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import ReactModal from 'react-modal';

// Home - Styled Components

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const HomeText = styled.div`
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
  border: 2px solid ${({white}) => (white ? 'white' : '#4927F1')};
  border-radius: 22px;
  color: ${({white}) => (white ? 'white' : '#4927F1')};
  cursor: pointer;
  font-family: 'Fredoka One', cursive;
  font-size: 18px;
  height: 38px;
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
  &:disabled {
    cursor: default;
    opacity: 0.5;
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

export const InputContainer = styled.div`
  color: white;
  margin: 30px 0px;
  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button {
    margin-top: 30px;
  }
`;

export const Label = styled.label`
  font-size: 22px;
  padding: 10px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
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

export const Move = keyframes`
  from {
    bottom: 0;
    position: absolute;
  }
  to {
    bottom: 110%;
    position: absolute;
  }
`

export const Points = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right;
  }
`

export const Ball = styled.div `
  animation-name: ${Points}, ${Move};
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

export const Animation = styled.div `
  background-image: linear-gradient(to bottom left, #EE3DA5, #FEC76D);
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`

// Game - Styled Components

export const GameContainer = styled.div`
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

export const RoundTitleTwo = styled(RoundTitle)`
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

export const PlayerOneContent = styled.div`
  background-image: linear-gradient(to bottom left, #4927f1, #FDCDD1);
  height: 100vh;
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

export const PlayerTwoContent = styled.div`
  background-image: linear-gradient(to bottom left, #35EDAA, #4927F1);
  height: 100vh;
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

export const SelectStyled = styled(Select) `
  cursor: pointer;
  font-size: 20px;
  left: 20px;
  outline: none;
  width: 160px;
  position: absolute;
  top: 10px;
  z-index: 2;
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

export const ReactModalStyled = styled(ReactModal)`
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

// Statistics - Styled Components

export const StatisticsContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom left, #EE3DA5, #12A5E7);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`

export const ScoreTitle = styled.div`
  align-items: center;
  background-color: white;
  color: black;
  display: flex;
  height: 80px;
  justify-content: space-evenly;
  margin: auto;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
  // iPad Pro
  @media (max-width: 1024px) {
    height: 50px;
  }
  // iPhone 6/7/8 Plus
  @media (max-width: 414px) {
    height: 40px;
  }
`

export const Table = styled.table `
  font-size: 15px;
  margin-bottom: 30px;
  overflow-x: auto;
  td, th {
    text-align: center;
    padding: 10px;
  }
  th {
    color: white;
    font-size: 30px;
    letter-spacing: 1px;
    // iPhone 6/7/8 Plus
    @media (max-width: 414px) {
      font-size: 16px;
    }
    // iPhone5/SE
    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
  tr:nth-child(odd){
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const TableContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x:auto;
  width: 90%;
`

export const PrincipalTitleStyled = styled(PrincipalTitle)`
  margin: 20px 0px;
`

// Window - Styled Components

export const Open = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 50%;
  }
`

export const Close = keyframes`
  0% {
    width: 50%;
  }
  100% {
    width: 0px;
  }
`

export const WindowLeft = styled.div`
  animation-name: ${props => props.openWindow ? Open : Close};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  background-image: ${({purple}) => (purple ? 'linear-gradient(#4927F1, #FDCDD1)' : 'linear-gradient(#4927F1, #35EDAA)')};
  border-radius: 20px 0px 0px 0px; 
  display: inline-block;
  height: 85%;
  position: absolute;
  z-index: 3;
`

export const WindowRight = styled.div`
  animation-name: ${props => props.openWindow ? Open : Close};
  animation-duration: 1s;
  animation-fill-mode: forwards;

  background-image: linear-gradient(white, #4927F1);
  background-image: ${({purple}) => (purple ? 'linear-gradient(#4927F1, #FDCDD1)' : 'linear-gradient(#4927F1, #35EDAA)')};

  border-radius: 0px 20px 0px 0px; 
  display: inline-block;
  height: 90%;
  position: absolute;
  right: 0;
  transform: rotateX(20deg);
  transform-origin: top;
  z-index: 3;
`

export const WindowContainer = styled.div`
  background-color: transparent;
  border-radius: 20px;
  bottom: 0;
  height: 240px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  z-index: 2;
  // Galaxy S5
  @media (max-width: 360px) {
    height: 220px;
  }
  // iPhone5/SE
  @media (max-width: 320px) {
    height: 194px;
  }
`

export const ButtonContainer = styled.div`
  align-items: center;
  background-color: ${({purple}) => (purple ? '#FDCDD1' : '#35EDAA')};
  border-radius: 0px 0px 20px 20px;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 4;
  // Galaxy S5
  @media (max-width: 360px) {
    height: 40px;
  }
  // iPhone5/SE
  @media (max-width: 320px) {
    height: 37px;
  }
`