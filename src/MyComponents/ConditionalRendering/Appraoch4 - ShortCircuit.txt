import React, { Component } from "react";

class ShortCircuit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return <div>{this.state.isLoggedIn && <div>Welcome Arafat</div>}</div>;
  }
}

export default ShortCircuit;
