//Coming from parent as a prop --> Removing from the JSX

import React from "react";

function ListProp({ person }) {
  return (
    <div>
      <h1>
        {`My name is ${person.name}. I am highly skills in ${person.skill}`}
      </h1>
    </div>
  );
}

export default ListProp;
