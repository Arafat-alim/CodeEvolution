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
  clickHandler = () => {
    alert(this.inputRefs.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRefs} />
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default RefsDemo;
