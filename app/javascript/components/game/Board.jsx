import React from 'react';
import BoardCell from './BoardCell';
import { makeMove } from '../../api/game';
import { definePlayerSymbol } from '../../helpers';

const Board = ({
  gameState,
  playerSymbol,
  setPlayerSymbol,
  active,
  currentSymbol,
}) => {
  const { state, id } = gameState;
  
  const cellAction = (row, col) => {
    definePlayerSymbol(currentSymbol, playerSymbol, setPlayerSymbol);
    makeMove(id, row, col);
  };
  
  return Object.keys(state || {}).map((row, i) => (
    <div
      className="board-row"
      key={`${JSON.stringify(state[row])}${i}`}
    >
      {Object.keys(state[row]).map((col, j) => (
        <BoardCell
          content={state[row][col]}
          key={`${JSON.stringify(state[row][col])}${j}`}
          onClickHandler={() => cellAction(row, col)}
          active={active}
        />
      ))}
    </div>
  ));
};

export default Board;