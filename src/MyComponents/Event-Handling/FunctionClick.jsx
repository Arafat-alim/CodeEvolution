import React from "react";

export default function FunctionClick() {
  function clickHandler() {
    alert("Finally Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
}
