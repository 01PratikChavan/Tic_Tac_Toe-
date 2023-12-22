import React, { useState } from "react";
import {Winning_COMBINATIONS}  from '../data/Winning_combinatins.js';
const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
   

const GameBoard = (props) => {

  const [gameBoard,setGameBoard]=useState(initGameBoard);

  //  if(checkWinn(gameBoard)){
  //   return ;
  //  }
    const winnerSymbol=checkWinn(gameBoard);
    if(winnerSymbol){
      props.onClickSquare(winnerSymbol);
    }

 const handleSelctedSquare=(Rowindex,Colindex)=>{

   let winnerSymbol=checkWinn(gameBoard);
    if(winnerSymbol){
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


const checkWinn=(gameBoard)=>{
  for(let i=0 ;i<Winning_COMBINATIONS.length ;i++){
    const[first,second,third]=Winning_COMBINATIONS[i];
    let firstSquare=gameBoard[first.row][first.col];
    let secondSquare=gameBoard[second.row][second.col];
    let thirdSquare=gameBoard[third.row][third.col];

    if(firstSquare!==null &&  firstSquare === secondSquare && secondSquare === thirdSquare){
          //console.log('Winner',firstSquare);
          return firstSquare;
       
    }
  }
    return null;
}
 

export default GameBoard;
