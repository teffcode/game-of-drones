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
  componentDidMount() {
    this.props.fetchStatistics();
  }

  goToGame = () => {
    this.props.history.push('/game')
  }

  render() {
    const { statistics } = this.props;

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
                    <tr>
                      <th>Rounds Wins</th>
                      <th>Rounds Defeats</th> 
                      <th>Games Wins</th>
                      <th>Games Defeats</th> 
                    </tr>
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

function mapStateToProps({ statistics }) {
  return {
    statistics,
  }
}

export default connect(mapStateToProps, { fetchStatistics })(Statistics);