import React, { Component } from "react";

class ElementVarIfElse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let msg;
    if (this.state.isLoggedIn) {
      msg = <div>Welcome Arafat</div>;
    } else {
      msg = <div>Welcome Guest</div>;
    }
    return (
      <div>
        <h1>{msg}</h1>
      </div>
    );
  }
}

export default ElementVarIfElse;
