import { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [turn, setTurn] = useState('X');
  const [game, setGame] = useState(['','','','','','','','','']);
  const [winner, setWinner] = useState ("Todavia no hay un ganador")
  
  const handleGame = (position)=>{
    if(game [position] !== "") return;
    const gameArray = [... game]; //! Para hacer copias de array
    gameArray [position] = turn
    setGame(gameArray);
    if (turn === 'X'){
      setTurn('O');
    }else{
      setTurn ('X')
    }

  }

let gameStatus;
let flag = false;

  const handleWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    lines.forEach(([x, y, z]) => {

      // console.log("1", game[x] == game[y]);
      // console.log("2", game[y] == game[z]);
      // console.log("3", game[x] != "");

      if (game[x] == game[y] && game[y] == game[z] && game[x] != "") {
        gameStatus = "GANO " + game[x];
        flag = true;
      } else {
        if (!flag)
          gameStatus = "Juegos " + turn;

      }


    });
    console.log(gameStatus);
  }

handleWinner();

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
    <h2>{gameStatus}</h2>
    </>
  );
}

export default Board;