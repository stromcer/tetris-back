//crea las columnas y las filas que quiere que contenga
export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
  // esto hace que cada una de las celdas tenga ese valor
    new Array(STAGE_WIDTH).fill([0, 'clear']),
  );
