import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));

  const renderSquare = (i) => {
    return <Square value={state[i]} onClick={() => handleClick(i)} />;
  };

  const handleClick = (i) => {
    const squares = [...state];
    console.log(squares)
    squares[i] = "X";
    console.log(squares)
    setState({ squares: squares });
  };

  const status = "Next player: X";

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
