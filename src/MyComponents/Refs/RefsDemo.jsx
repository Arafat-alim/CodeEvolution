//how to create a refs
import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputRefs);
    this.inputRefs.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
      </div>
    );
  }
}

export default RefsDemo;
