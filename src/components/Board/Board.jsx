import { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [turn, setTurn] = useState('X');
  const [game, setGame] = useState(['','','','','','','','','']);

  
  const handleGame = (position)=>{
    const gameArray = [... game];
    gameArray [position] = 'X'
    setGame(gameArray)
  }
  return ( 
    <>
    <div>
      <Square symbol={game[0]} action={()=>handleGame(0)}/>
      <Square symbol={game[1]} action={()=>handleGame(1)}/>
      <Square symbol={game[2]} action={()=>handleGame(2)}/>
    </div>
    <div>
      <Square symbol={game[3]} action={()=>handleGame(3)}/>
      <Square symbol={game[4]} action={()=>handleGame(4)}/>
      <Square symbol={game[5]} action={()=>handleGame(5)}/>
    </div>
    <div>
      <Square symbol={game[6]} action={()=>handleGame(6)}/>
      <Square symbol={game[7]} action={()=>handleGame(7)}/>
      <Square symbol={game[8]} action={()=>handleGame(8)}/>
    </div>
    </>
  );
}
 
export default Board;