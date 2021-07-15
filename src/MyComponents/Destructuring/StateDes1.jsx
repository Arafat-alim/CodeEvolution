import React, { Component } from "react";

class StateDes1 extends Component {
  render() {
    const { name, value } = this.props; //for props
    // const {state1, state2} = this.state; // for state
    //we do lots more exercises in state destructuring concepts soon
    return (
      <div>
        <h1>
          {name} is {value}
        </h1>
      </div>
    );
  }
}

export default StateDes1;
