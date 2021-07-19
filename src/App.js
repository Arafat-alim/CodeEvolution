import React from "react";
import "./App.css";
import ParentComp from "./MyComponents/PureComponent/ParentComp";

function App() {
  return <div className="App">{<ParentComp />}</div>;
}

export default App;
