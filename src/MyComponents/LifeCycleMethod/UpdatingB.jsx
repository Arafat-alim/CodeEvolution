import React, { Component } from "react";

export default class UpdatingB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Updating Phase",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("UpdatingB - getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("UpdatingB - shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("UpdatingB - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("UpdatingB - componentDidUpdate");
  }
  render() {
    console.log("UpdatingB - render");
    return (
      <div>
        <h1>Updating Phase Tutorial</h1>
      </div>
    );
  }
}
