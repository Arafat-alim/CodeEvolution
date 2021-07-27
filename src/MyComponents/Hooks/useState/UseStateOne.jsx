import React, { useState } from "react";
//creating a counter using useState
// function initialCount() { //3rd this will lead to call funciton whenever i clicked, dont follow these approach
//   console.log("run function");
//   return 4;
// }

function UseStateOne() {
  //   const [count, setCount] = useState(4); // 1st wrtiting 4 is doesnt matter
  const [count, setCount] = useState(() => {
    //2nd way to do
    console.log("run function"); // it will call once
    return 4;
  });
  //   const [count, setCount] = useState(initialCount()); //3rd way, dont follow this approach go with 1st or 2nd

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
