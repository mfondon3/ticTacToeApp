import React from 'react';
import ReactDOM from 'react-dom';

function Square(props){
  let winningButton = props.isWinner ? ' winningSquare' : '';
  return (
    <button className={"square" + winningButton} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square