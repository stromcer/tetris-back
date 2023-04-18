import React, {useState} from 'react';
import { createStage } from '../gameHelpers';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

//Stylos componentes
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

//hooks
import { usePlayer } from '../js/hooks/usePlayer';
import { useStage } from '../js/hooks/useStage';

const Tetris = () => {
    
    //tiempo de caida que dependerá del nivel que se encuentre el jugador
    const [dropTime , setDropTime] = useState(null);
    //establece el fin del juego que nos indicará si el juego a terminado o no
    const [gameOver, setGameOver]= useState(false);
    
    //desestructuramos a el jugador xD
    const [player , updatePlayerPos , resetPlayer] = usePlayer();
    //Estado de juego para ese jugador
    const [stage , setStage] = useStage(player);

  
  const movePlayer = dir =>{
    updatePlayerPos({x: dir , y: 0})
  }
  

  const startGame =()=>{
    setStage(createStage());
    resetPlayer()

  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  }
  
    return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e=> move(e)} >
        <StyledTetris>
      <Stage stage={stage}  />
      <aside>
      {gameOver?(
        <Display gameOver={gameOver} text="Game Over"/>
      ): (
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>

)}
        <StartButton callback={startGame} />
      </aside>
     
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
