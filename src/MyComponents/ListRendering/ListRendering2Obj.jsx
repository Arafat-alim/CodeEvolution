import React from "react";

function ListRendering2Obj() {
  let personList = [
    {
      sno: 1,
      name: "Arafat",
      skill: "Full Stack Web",
    },
    {
      sno: 2,
      name: "Aman",
      skill: "React",
    },
    {
      sno: 3,
      name: "ALim",
      skill: "Vue",
    },
    {
      sno: 4,
      name: "Khan",
      skill: "Angular",
    },
  ];

  let personObj = personList.map((person) => (
    <h1>
      {`My name is ${person.name}. I am highly skills in ${person.skill}`}
    </h1>
  ));
  return <div>{personObj}</div>;
}

export default ListRendering2Obj;
