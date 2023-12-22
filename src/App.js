import './App.css';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';

function App() {
 
     const[winner,setWinner]=useState(false);
     const[item,setItem]=useState('X');

      const playerClickHandler=(winnerSymbol)=>{

        if(winnerSymbol!==null){
          setWinner(true);
          return ;
      }
      
        setItem(prevItem=>prevItem==='X'?'O':'X');
        //   console.log(item);
      }
    


    return (
        <div>
            <div id='container'>
               {winner && <h2>Game Over! Winner is {item==='X'?'O':'X'} </h2>}
                <ol id='players' >
                    <Player name='player1' symbol={'X'} isActive={item==='X'} winner={ winner && item==='O'} />
                    <Player name='player2' symbol={'O'} isActive={item==='O'} winner={winner && item==='X'}/>
                </ol>

                <GameBoard item={item}  onClickSquare={playerClickHandler}  />

            </div>
           
        </div>
    );
}


export default App;
