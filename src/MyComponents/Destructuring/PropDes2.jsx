import React from "react";

const PropDes2 = (props) => {
  const { name, quality } = props;
  return (
    <div>
      <h2>
        Big {name} is {quality}
      </h2>
    </div>
  );
};

export default PropDes2;
