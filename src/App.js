import "./App.css";
import FileClass from "./MyComponents/Props/FileClass";

function App() {
  return (
    <div className="App">
      <FileClass name="GOhan" />
      <FileClass>
        <button>Submit Here</button>
      </FileClass>
    </div>
  );
}

export default App;
