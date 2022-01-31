import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Todo></Todo>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/kazimanilaydin">Kazım Anıl AYDIN</a>
        </p>
        <p>
          Using with <a href="https://reactjs.org/">ReactJs</a>
        </p>
      </footer>
    </>
  );
}

export default App;
