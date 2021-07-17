import React from "react";

function Inline() {
  let styling = {
    fontSize: "100px",
    color: "blue",
  };
  return (
    <div>
      <h1 style={styling}>gooogle</h1>
      <h2 className="error">ROmio</h2>
    </div>
  );
}

export default Inline;
