//here we are going to use object in useState

import React, { useState } from "react";

function UseStateTwo() {
  // creating an hooks useState syntax
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decrement() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 }; //must add spread to avoid overwrite old state
    });
  }
  return (
    <div>
      <h1>React Hooks</h1>
      <h3>useState() in object</h3>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button>+</button>
    </div>
  );
}

export default UseStateTwo;
