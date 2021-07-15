//Bind hai toh class component ayega
import React, { Component } from "react";

class BindingClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }
  //using an arrow function for declaration
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* Approach 4: Class Property */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default BindingClick;
