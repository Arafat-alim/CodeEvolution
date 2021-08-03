import React from "react";
import ACTION from "./UseReducerEx2";

export default function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTION.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button>Delete</button>
    </div>
  );
}
