import "./App.css";
import PropDes2 from "./MyComponents/Destructuring/PropDes2";
import PropsDes1 from "./MyComponents/Destructuring/PropsDes1";

function App() {
  return (
    <div className="App">
      <PropsDes1 name={"Arafat"} heroname={"Boss"} />
      <PropDes2 name={"Boss"} quality={"back"} />
    </div>
  );
}

export default App;
