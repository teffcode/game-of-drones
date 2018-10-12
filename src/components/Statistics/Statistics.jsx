import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { PrincipalTitle, Button } from '../Home/Home';

const StatisticsContainer = styled.div`
  align-items: center;
  background-color: pink;
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
  height: 50px;
  justify-content: space-evenly;
  margin: auto;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
`

const Table = styled.table `
  font-size: 20px;
  width: 60%;
  td, th {
    text-align: center;
    padding: 10px;
  }
  th {
    color: white;
    font-size: 30px;
    letter-spacing: 1px;
  }
  tr:nth-child(odd){
    background-color: rgba(255, 255, 255, 0.5);
  }
}
`

class Statistics extends Component {

  handleSubmit = () => {
    this.props.history.push('/game')
  }

  render() {
    return (
      <StatisticsContainer>
        <ScoreTitle>
          <PrincipalTitle black>Score</PrincipalTitle>
          <Button onClick={this.handleSubmit}>Back</Button>
        </ScoreTitle>
        <Table>
          <tr>
            <th>Round</th>
            <th>Winner</th> 
          </tr>
          <tr>
            <td>1</td>
            <td>asdad</td> 
          </tr>
          <tr>
            <td>2</td>
            <td>dfgdgdf</td> 
          </tr>
        </Table>
      </StatisticsContainer>
    );
  }
}

export default withRouter(Statistics);