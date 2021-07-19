import React from "react";
import FragmentTable2 from "./FragmentTable2";

function FragmentTable() {
  return (
    <>
      <table>
        <tbody>
          <tr>{<FragmentTable2 />}</tr>
        </tbody>
      </table>
    </>
  );
}

export default FragmentTable;
