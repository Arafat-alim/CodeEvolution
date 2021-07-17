import React from "react";

function IndexAsKey() {
  const personName = ["arafat", "Aman", "ALim", "Aman"];
  let personList = personName.map((person, index) => (
    <h1 key={index}>{person}</h1>
  ));
  return <div>{personList}</div>;
}

export default IndexAsKey;
