import { useState , useEffect} from "react";
import { createStage } from "../../gameHelpers";


export const useStage =(player , resetPlayer)=>{
//Inicia el tablero limpio
const [stage , setStage] = useState(createStage())

useEffect(()=>{
    const updateStage = prevStage => {
        // First flush the stage
        const newStage = prevStage.map(row =>
          row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
        );
  
        //saca la pieza con la forma que corresponda y le pone un valor si no es 0
        player.tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
              if (value !== 0) {
                newStage[y + player.pos.y][x + player.pos.x] = [
                  value,
                  `${player.collided ? 'merged' : 'clear'}`,
                ];
              }
            });
          });
    
          return newStage;
        };
    
        setStage(prev => updateStage(prev));
      }, [player]);
    
      return [stage, setStage];
    };