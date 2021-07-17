import React from "react";
import imgfile from "./snowshoe.jpg";

export default function ImageFile() {
  return (
    <div>
      <img src={imgfile} alt="no-img" width="500px" />
    </div>
  );
}
