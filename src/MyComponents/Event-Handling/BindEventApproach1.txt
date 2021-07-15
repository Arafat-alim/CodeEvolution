//Bind hai toh class component ayega
import React, { Component } from "react";

class BindingClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler() {
    this.setState({
      message: "Goodbye!",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Approach 1: */}
        <button onClick={this.clickHandler.bind(this)}>Click Me</button>
      </div>
    );
  }
}

export default BindingClick;
