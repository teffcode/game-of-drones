import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStatistics } from '../../actions';

import { 
  PrincipalTitle, 
  Button,
  StatisticsContainer,
  ScoreTitle,
  Table,
  TableContainer,
  PrincipalTitleStyled
} from '../Styled/Styled';

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