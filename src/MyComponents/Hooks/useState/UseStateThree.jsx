//Best way to use or write useState in this manner
import React, { useState } from "react";

function UseStateThree() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrement() {
    setCount((prevState) => prevState - 1);
  }

  function increment() {
    setCount((prevState) => prevState + 1);
    setTheme("red");
  }
  return (
    <div>
      <h1>React Hooks - useState()</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseStateThree;
