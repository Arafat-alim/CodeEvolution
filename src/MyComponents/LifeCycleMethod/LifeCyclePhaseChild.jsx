import React, { Component } from "react";

export default class LifeCyclePhaseChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Mouting Phase",
    };
    console.log("LifeCyleChild - Mouting Phase - Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCyleChild - Mouting Phase - getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCyleChild - Mouting Phase - ComponentDidMount");
  }
  render() {
    console.log("LifeCyleChild - Mouting Phase - render");
    return (
      <div>
        <h1>LifeCycle Phase - Child</h1>
      </div>
    );
  }
}
