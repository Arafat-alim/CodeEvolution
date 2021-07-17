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
    console.log(
      "LifeCyleChild - 1st Mouting Phase , 2nd Updating Phase - getDerivedStateFromProps"
    );
    return null;
  }

  componentDidMount() {
    console.log("LifeCyleChild - Mouting Phase - ComponentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCyleChild - Updating Phase - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("LifeCyleChild - Updating Phase - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCyleChild - Updating Phase - componentDidUpdate");
  }
  render() {
    console.log(
      "LifeCyleChild - 1st Mouting Phase , 2nd Updating Phase - render"
    );
    return (
      <div>
        <h1>LifeCycle Phase - Child</h1>
      </div>
    );
  }
}
