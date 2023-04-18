import { useCallback, useState } from "react";
import { TETROMINOS, randomTetromino } from "../../components/tetrominos";
import { STAGE_WIDTH } from "../../gameHelpers";

export const usePlayer=()=>{

//Estado inicial del jugador
 const [player , setPlayer] = useState({
 pos: { x: 0, y: 0 },
 //funcion que hace que aparezca una figura aleatoriamente creada anteriormente en el archivo terominos
 tetromino: TETROMINOS[0].shape,
 //propiedad que hemos creado en falso
 collided: false,
 })

const updatePlayerPos =({ x , y , collided})=>{
setPlayer(prev => ({
...prev ,
pos :{ x : (prev.pos.x += x) , y: (prev.pos.y += y)},collided, }))
}

const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    })
  }, [])

  return [player, updatePlayerPos, resetPlayer];
}



