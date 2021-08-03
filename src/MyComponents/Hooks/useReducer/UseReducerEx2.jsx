import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTION = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTION.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      break;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function UseReducerEx2() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  function handleChange(event) {
    event.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } });
    return {};
  }
  //   console.log(todos);
  return (
    <>
      <form onSubmit={handleChange}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default UseReducerEx2;
