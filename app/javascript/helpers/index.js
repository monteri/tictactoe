import { SYMBOLS } from '../constants';

export const definePlayerSymbol = (currentSymbol, playerSymbol, setPlayerSymbol) => {
  if (!playerSymbol) {
    setPlayerSymbol(currentSymbol);
  }
};

export const getSymbol = (currentFromApi) => SYMBOLS[currentFromApi];

export const getWinner = (winner) => SYMBOLS[winner];

export const isActiveTurn = (currentSymbol, playerSymbol) => (currentSymbol === playerSymbol) || !playerSymbol;

