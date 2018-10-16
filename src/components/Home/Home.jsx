import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';

import { setPlayers } from '../../actions';
import { 
  HomeContainer,
  HomeText,
  Button,
  PrincipalTitle,
  InputContainer,
  Label,
  Input,
  Move,
  Points,
  Ball,
  Animation
} from '../Styled/Styled';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player2: '',
    }
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

  handleSubmit = (e) => {
    const { player1, player2 } = this.state;

    e.preventDefault();
    this.props.setPlayers(player1, player2);
    this.props.history.push('/game');
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { player1, player2 } = this.state;
    return (
      <HomeContainer>
        <Animation>{ this.renderAnimation() }</Animation>
        <HomeText>
          <PrincipalTitle>Game of Drones</PrincipalTitle>
          <InputContainer>
            <form onSubmit={this.handleSubmit}>
              <div>
                <Label>Player 1 <span role="img" aria-label="hand">👉🏼 </span></Label>
                <Input
                  type="text"
                  name="player1"
                  placeholder="Player 1 name"
                  value={player1}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <Label>Player 2 <span role="img" aria-label="hand">👉🏾</span></Label>
                <Input
                  type="text"
                  name="player2"
                  placeholder="Player 2 name"
                  value={player2}
                  onChange={this.handleChange}
                />
              </div>
              <Button type="submit">Start</Button>
            </form>
          </InputContainer>
        </HomeText>
      </HomeContainer>
    );
  }
}

export default connect(null, { setPlayers })(Home);