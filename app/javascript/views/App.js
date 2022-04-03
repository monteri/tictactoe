import React, { useState, useEffect } from 'react';
import GameView from './game/GameView';
import WaitingView from './game/WaitingView';
import connectToGameChannel from "../channels/game_channel";

const App = () => {
  const [gameState, setGameState] = useState({});
  const [playerSymbol, setPlayerSymbol] = useState(null);
  
  const connectedToChannel = () => console.log('connected');
  const disconnectedFromChannel = () => console.log('disconnected');
  const receivedFromChannel = (data) => setGameState(JSON.parse(data))

  useEffect(() => {
    connectToGameChannel({
      connected: connectedToChannel,
      disconnected: disconnectedFromChannel,
      received: receivedFromChannel,
      gameId: document.getElementById('game-id').dataset.gameId,
    })
  }, []);
  
  return gameState.started ? (
    <GameView
      gameState={gameState}
      playerSymbol={playerSymbol}
      setPlayerSymbol={setPlayerSymbol}
    />
  ) : (
    <WaitingView />
  );
};

export default App;

