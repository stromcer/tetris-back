import React, {useState} from 'react';
import { createStage } from '../gameHelpers';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { checkCollision } from '../gameHelpers';
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
    
    //desestructuramos 
    const [player , updatePlayerPos , resetPlayer] = usePlayer();
    //Estado de juego para ese jugador
    const [stage , setStage] = useStage(player);

  
  //coje la direccion
  const movePlayer = dir => {
      //si no chocamos hace el movimiento y si es asi no hace nada
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }
//funcion para el boton de start
  const startGame = () => {
    console.log("test")
    // Reset everything
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1); //mueve a la izquierda
      } else if (keyCode === 39) {
        movePlayer(1); //mueve a la derecha
      } else if (keyCode === 40) {
        dropPlayer(); //mueve hacia abajo
      }
    }
  
  };


  console.log('re-render')
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
