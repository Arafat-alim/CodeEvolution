import React, { Component } from "react";
import UpdatingB from "./UpdatingB";

export default class UpdatingA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Updating Phase",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("UpdatingA - getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("UpdatingA - shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, PrevState) {
    console.log("UpdatingA - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("UpdatingA - componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      message: "Geeky",
    });
  };
  render() {
    console.log("UpdatingA - render");
    return (
      <div>
        <h1>Updating Phase Tutorial</h1>
        <button onClick={this.changeState}>Click Me!</button>
        {<UpdatingB />}
      </div>
    );
  }
}
