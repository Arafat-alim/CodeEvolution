import React, { Component } from "react";

class TernaryConditonal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <h1>Welcome Arafat</h1>
        ) : (
          <h1>Welcome Guest</h1>
        )}
      </div>
    );
  }
}

export default TernaryConditonal;
