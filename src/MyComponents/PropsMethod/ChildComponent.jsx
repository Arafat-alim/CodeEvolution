//Getting Methods Props from the ParentComponent
//2) now childcomponent passing the props to the parent component with the help of arrow function
import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
