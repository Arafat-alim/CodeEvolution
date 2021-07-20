//!Here this is not working
// TODO  - will complete this topic in future.

import React, { Component } from "react";

class RefsClassCompParent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandlder = () => {
    console.log(this.componentRef.current.focusInput);
    this.componentRef.current.focusInput(); //coming from the child method
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.componentRef} />
        <button onClick={this.clickHandlder}>Focus Input</button>
      </div>
    );
  }
}

export default RefsClassCompParent;
