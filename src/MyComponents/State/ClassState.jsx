import React, { Component } from "react";
class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to the State React",
    };
  }

  changeMe() {
    this.setState({
      message: "Congratulation! You have learnt State Hooks",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMe()}>Change Me</button>
      </div>
    );
  }
}

export default ClassState;
