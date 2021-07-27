import React, { useState } from "react";

function UseEffectOne() {
  const [resourceType, setResourceType] = useState("posts");
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Post</button>
        <button onClick={() => setResourceType("share")}>Share</button>
        <button onClick={() => setResourceType("comments")}>Comment</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default UseEffectOne;
