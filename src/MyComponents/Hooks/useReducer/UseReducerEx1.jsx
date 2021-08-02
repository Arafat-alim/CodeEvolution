import React, { useState, useReducer } from "react";

// const [state, dispatch] = useReducer(reducer, initialState, init) //syntax

//constants
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };

    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    default:
      break;
  }
}

function UseReducerEx1() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: "increment" });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: "decrement" });
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default UseReducerEx1;
