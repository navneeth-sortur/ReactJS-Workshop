import Game from "./components/Game";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Tic-Tac-Toe" />
      <Game />
    </div>
  );
}

export default App;
