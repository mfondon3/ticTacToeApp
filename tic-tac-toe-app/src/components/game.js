import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerTurn: 'X',
    };
  }

  handleClick(i) {
    let squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    let playerTurn = this.state.playerTurn;
    squares[i] = playerTurn;
    this.setState({
      squares: squares,
      playerTurn: playerTurn === 'X' ? 'O' : 'X'});
  }
  
  render() {
    const winStatus = calculateWinner(this.state.squares);
    let status
    let winningSquares = null;
    if (winStatus) {
      status = 'Winner: ' + winStatus['winner'];
      winningSquares = winStatus['squares'];
    } else {
      status = 'Next player: ' + this.state.playerTurn;      
    }
    return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <Board squares={this.state.squares} winningSquares={winningSquares} handleClick={(i) => this.handleClick(i)}/>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a]=== squares[b] && squares[a] === squares[c]) {
      let winner = squares[a];
      return {'winner': winner, 'squares': lines[i]};
    }
  }
  return null;
}

export default Game