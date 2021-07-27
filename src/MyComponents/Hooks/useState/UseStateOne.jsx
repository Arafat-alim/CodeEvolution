import React, { useState } from "react";
//creating a counter using useState

function UseStateOne() {
  const [count, setCount] = useState(4);
  function decrement() {
    // setCount(count - 1); //1st way which is not a  correct way to do this
    //setCount(count - 1); //if we call this method twice, it will decrease by two
    setCount((prevState) => prevState - 1); //2nd way which is perfect.
    // setCount((prevState) => prevState - 1); //if we call this method twice, decreae by 2
  }

  function increment() {
    setCount((prevState) => prevState + 1);
  }
  return (
    <div style={{ fontSize: "25px" }}>
      <h1>React Hooks</h1>
      <h3>useState()</h3>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseStateOne;
