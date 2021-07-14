import "./App.css";
// import Welcome from "./MyComponents/2.ClassComponent/Welcome";
import { Greet } from "./MyComponents/FunctionalComponent/Greet";
import Home from "./MyComponents/ClassComponent/Home";

function App() {
  return (
    <div className="App">
      <Greet />
      <Home />
    </div>
  );
}

export default App;
