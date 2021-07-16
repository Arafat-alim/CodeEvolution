import React from "react";
import ListProp from "./ListProp";

function ListRenderingProps() {
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

  let personProps = personList.map((person) => <ListProp person={person} />);
  return (
    <div>
      <h1>{personProps}</h1>
    </div>
  );
}

export default ListRenderingProps;
