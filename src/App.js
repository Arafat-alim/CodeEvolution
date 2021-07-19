import React from "react";
import "./App.css";
import ParentComp from "./MyComponents/MemoComponent/ParentComponent";

function App() {
  return <div className="App">{<ParentComp />}</div>;
}

export default App;
