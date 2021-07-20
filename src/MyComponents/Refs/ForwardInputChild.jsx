import React from "react";

// function ForwardInputChild() {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }
const ForwardInputChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default ForwardInputChild;
