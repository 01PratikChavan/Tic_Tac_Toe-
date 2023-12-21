import './App.css';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
function App() {
    return (
        <div>
            <div id='container'>
                <ol id='players' >
                    <Player name='player1' symbol={'X'} />
                    <Player name='player2' symbol={'O'} />
                </ol>

                <GameBoard />

            </div>
            LOG
        </div>
    );
}

export default App;
