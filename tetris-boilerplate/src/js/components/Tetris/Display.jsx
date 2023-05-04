import React from 'react';


const Display = ({ gameOver, text2,text1 }) => (
  <div className="tetris-display" gameOver={gameOver}>
    <div>{text1}</div>{text2}
  </div>
)

export default Display;