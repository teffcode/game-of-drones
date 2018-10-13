import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchStatistics } from '../../actions';

import { PrincipalTitle, Button } from '../Home/Home';

const StatisticsContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom left, #EE3DA5, #12A5E7);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`

const ScoreTitle = styled.div`
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

const Table = styled.table `
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

const TableContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x:auto;
  width: 90%;
`

const PrincipalTitleStyled = styled(PrincipalTitle)`
  margin: 20px 0px;
`

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistics: []
    }
  }

  componentDidMount() {
    this.props.fetchStatistics()
      .then(response => {
        this.setState((prevState) => {
          return {
            ...prevState,
            statistics: [...response.payload.data],
          }
        });
      });
  }

  goToGame = () => {
    this.props.history.push('/game')
  }

  render() {
    const { statistics } = this.state;

    return (
      <StatisticsContainer>
        <ScoreTitle>
          <PrincipalTitle blue>Score</PrincipalTitle>
          <Button onClick={this.goToGame}>Back</Button>
        </ScoreTitle>
        {
          statistics.map((info) => {
            return (
              <TableContainer key={info._id}>
                <PrincipalTitleStyled blue>
                  <span role="img" aria-label="hand">👇🏼 </span>
                    {info.name}
                  <span role="img" aria-label="hand"> 👇🏾</span>
                </PrincipalTitleStyled>
                <Table>
                  <thead>
                    <th>Rounds Wins</th>
                    <th>Rounds Defeats</th> 
                    <th>Games Wins</th>
                    <th>Games Defeats</th> 
                  </thead>
                  <tbody>
                    <tr>
                      <td>{info.rounds.wins}</td>
                      <td>{info.rounds.defeats}</td>
                      <td>{info.games.wins}</td>
                      <td>{info.games.defeats}</td>
                    </tr>
                  </tbody>
                </Table>
              </TableContainer>
            );
          })
        }
      </StatisticsContainer>
    );
  }
}

export default connect(null, { fetchStatistics })(Statistics);