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
    console.log("LifeCyle - Mouting Phase - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCyle - Mouting Phase - ComponentDidMount");
  }
  render() {
    console.log("LifeCyle - Mouting Phase - render");
    return (
      <div>
        <h1>LifeCycle Phase - Parent Child</h1>
        {<LifeCyclePhaseChild />}
      </div>
    );
  }
}
