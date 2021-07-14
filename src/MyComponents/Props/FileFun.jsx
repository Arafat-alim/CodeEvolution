// Functional component with using a prop
import React from "react";

const FileFun = (props) => {
  return (
    <>
      <div>
        <h1>Hello! {props.name}</h1>
      </div>
      {props.children}
    </>
  );
};

export default FileFun;
