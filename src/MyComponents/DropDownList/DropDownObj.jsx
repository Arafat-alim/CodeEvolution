import React, { useState } from "react";
import data from "./data";

export default function DropDownObj() {
  const [user, setuser] = useState();
  const handleChange = (e) => {
    const selectedUser = e.target.value;
    const selectedUserState = data.filter((d) => d.id === selectedUser)[0];
    setuser(selectedUserState);
  };
  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        {data.map((d) => {
          return (
            <option key={d.id} value={d.id}>
              {d.title}
            </option>
          );
        })}

        <img src={user?.image} width="80%" alt="" />
      </select>
    </div>
  );
}
