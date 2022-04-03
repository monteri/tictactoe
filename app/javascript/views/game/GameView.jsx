import React from 'react';
import Board from '../../components/game/Board';
import WinnerAlert from '../../components/game/WinnerAlert';
import { getSymbol, getWinner, isActiveTurn } from '../../helpers';

const GameView = ({ gameState, playerSymbol, setPlayerSymbol }) => {
  const currentSymbol = getSymbol(gameState.current_symbol);
  const active = isActiveTurn(currentSymbol, playerSymbol);
  const winner = getWinner(gameState.winner);
  
  return (
    <div>
      {winner ? <WinnerAlert winner={winner} /> : (
        <>
          <h1>Game has started</h1>
          {playerSymbol
            ? <h3>Your symbol is {playerSymbol}</h3>
            : <h3>Make your first move</h3>}
          {active ? 'Your turn' : 'Opponents turn'}
        </>
      )}
      <Board
        gameState={gameState}
        playerSymbol={playerSymbol}
        setPlayerSymbol={setPlayerSymbol}
        active={active}
        currentSymbol={currentSymbol}
      />
    </div>
  )
};

export default GameView;