import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.js'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerTurn: 'X',
    };
  }
  renderSquare(i, winningSquares) {
    let isWinner = false;
    if (winningSquares) {
      if (winningSquares && winningSquares.includes(i)) {
        isWinner = true
      }
    }
    return (
      <Square
        value={this.state.squares[i]}
        onClick ={() => this.handleClick(i)}
        isWinner = {isWinner}
      />
    );
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
    const winner = calculateWinner(this.state.squares);
    let status
    let winners = null;
    if (winner) {
      status = 'Winner: ' + winner['winner'];
      winners = winner['squares'];
    } else {
      status = 'Next player: ' + this.state.playerTurn;      
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0, winners)}
          {this.renderSquare(1, winners)}
          {this.renderSquare(2, winners)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, winners)}
          {this.renderSquare(4, winners)}
          {this.renderSquare(5, winners)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, winners)}
          {this.renderSquare(7, winners)}
          {this.renderSquare(8, winners)}
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
export default Board;