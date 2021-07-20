import React, { Component } from "react";
import ForwardInputChild from "./ForwardInputChild";

export default class FowardInputParent extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = React.createRef(); //1st
  }
  clickHandler = () => {
    this.inputRefs.current.focus();
  };
  render() {
    return (
      <div>
        <ForwardInputChild ref={this.inputRefs} />
        <button onClick={this.clickHandler}>click Me</button>
      </div>
    );
  }
}
