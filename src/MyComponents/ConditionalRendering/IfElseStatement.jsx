import React, { Component } from "react";

export class IfElseStatement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Arafat</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
    // return (
    //   <div>
    //     <h1>Hello</h1>
    //   </div>
    // );
  }
}

export default IfElseStatement;
