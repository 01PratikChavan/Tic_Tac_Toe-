import React from "react";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ul id="board">
      {initGameBoard.map((itemRow, index) => {
        return (
          <li key={index}>
            <ul>
              {itemRow.map((item, index) => {
                return (
                  <li key={index}>
                    <button>{item}</button>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default GameBoard;
