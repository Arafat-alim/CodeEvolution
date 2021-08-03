import React, { useState } from "react";

export default function DropDownState() {
  const [foodState, setFoodState] = useState("");
  return (
    <div>
      {/* Creating a drop down box */}
      <select
        value={foodState}
        onChange={(event) => {
          const selectedFood = event.target.value;
          setFoodState(selectedFood);
        }}
      >
        <option value="">--Select Any--</option>
        <option value="pizza">Pizza</option>
        <option value="sandwich">Sandwich</option>
        <option value="burger">Burger</option>
      </select>
      <div>{foodState}</div>
    </div>
  );
}
