import React, { useState } from "react";
import { Winning_COMBINATIONS } from "../data/Winning_combinatins";

const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
   

const GameBoard = (props) => {

  const [gameBoard,setGameBoard]=useState(initGameBoard);


let winnerSymbol;
 const handleSelctedSquare=(Rowindex,Colindex)=>{
          winnerSymbol=checkWin(gameBoard);
           if(winnerSymbol){
            props.onClickSquare(winnerSymbol);
            return;
           }
        setGameBoard((prevBoard)=>{
          const updatedBoard=[...prevBoard.map(innerArr=>[...innerArr])];
            updatedBoard[Rowindex][Colindex]= props.item;
            return updatedBoard;
        });
       //console.log('selected' ,Rowindex,Colindex)
       props.onClickSquare(winnerSymbol);
 
      }

  return (
    <ul id="board">
      {gameBoard.map((itemRow, Rowindex) => {
        return (
          <li key={Rowindex}>
            <ul>
              {itemRow.map((item, Colindex) => {
                return (
                  <li key={Colindex}>
                    <button onClick={()=>handleSelctedSquare(Rowindex,Colindex)} disabled={item!==null}>{item}</button>
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

 const checkWin=(gameBoard)=>{
  
  for(let i=0 ;i<Winning_COMBINATIONS.length ;i++){
      let firstSquare=gameBoard[Winning_COMBINATIONS[i][0].row][Winning_COMBINATIONS[i][0].col];
      let secondSquare=gameBoard[Winning_COMBINATIONS[i][1].row][Winning_COMBINATIONS[i][1].col];
      let thirdSquare=gameBoard[Winning_COMBINATIONS[i][2].row][Winning_COMBINATIONS[i][2].col];

      if(firstSquare === secondSquare && secondSquare === thirdSquare){
            console.log('Winner',firstSquare);
            break; 
      }
  }

}


export default GameBoard;
