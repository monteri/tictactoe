import React from 'react';

const BoardCell = ({ content, onClickHandler, active }) => {
  
  const displayContent = (data) => {
    switch (data) {
      case 0:
        return 'X';
      case 1:
        return '0';
      default:
        return null
    }
  };
  
  const cell = displayContent(content)
  
  return (
    <div
      className="board-cell"
      onClick={cell || !active ? () => {} : onClickHandler}
    >
      {cell}
    </div>
  );
};

export default BoardCell;