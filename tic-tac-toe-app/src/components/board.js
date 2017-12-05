import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.js'

class Board extends React.Component {
  renderSquare(i, winningSquares) {
    let isWinner = false;
    if (winningSquares) {
      if (winningSquares && winningSquares.includes(i)) {
        isWinner = true
      }
    }
    return (
      <Square
        value={this.props.squares[i]}
        onClick ={() => this.props.handleClick(i)}
        isWinner = {isWinner}
      />
    );
  }

  render() {
    let winningSquares = this.props.winningSquares;
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, winningSquares)}
          {this.renderSquare(1, winningSquares)}
          {this.renderSquare(2, winningSquares)}
        </div>
        <div className="board-row">
          {this.renderSquare(3, winningSquares)}
          {this.renderSquare(4, winningSquares)}
          {this.renderSquare(5, winningSquares)}
        </div>
        <div className="board-row">
          {this.renderSquare(6, winningSquares)}
          {this.renderSquare(7, winningSquares)}
          {this.renderSquare(8, winningSquares)}
        </div>
      </div>
    );
  }
}
export default Board;