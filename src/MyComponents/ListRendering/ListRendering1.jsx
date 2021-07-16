import React from "react";

export default function ListRendering1() {
  let names = ["Arafat", "Aman", "Alim"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}
