import React, { Component } from "react";
import LifeCyclePhaseChild from "./LifeCyclePhaseChild";

export default class LifeCyclePhase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Mouting Phase",
    };
    console.log("LifeCyle - Mouting Phase - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "LifeCyle - 1st Mouting Phase , 2nd Updating Phase - getDerivedStateFromProps"
    );

    return null;
  }

  componentDidMount() {
    console.log("LifeCyle - Mouting Phase - ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycle - Updating Phase - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifeCycle - Updating Phase - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle - Updating Phase - componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      message: "Change state",
    });
  };
  render() {
    console.log("LifeCyle - 1st Mouting Phase , 2nd Updating Phase - render");
    return (
      <div>
        <h1>LifeCycle Phase - Parent Child</h1>
        <button onClick={this.changeState}>Click Me</button>
        {<LifeCyclePhaseChild />}
      </div>
    );
  }
}
