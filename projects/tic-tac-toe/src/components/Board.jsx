import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner;
  //     ? "Winner: " + winner
  //     : "Next player: " + (xIsNext ? "X" : "O");
  if (winner) {
    status = "👏 Winner: " + winner + "🥳 !!!";
  } else if (!squares.includes(null)) {
    status = "😐 Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 3, 6].map(startIndex => (
        <div className="board-row" key={startIndex}>
          {[0, 1, 2].map(offset => {
            const i = startIndex + offset;
            return (
              <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Board;
