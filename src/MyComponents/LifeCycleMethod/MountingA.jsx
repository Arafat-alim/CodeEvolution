import React, { Component } from "react";
import MountingB from "./MountingB";

class MountingA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "React Mounting ",
    };
    console.log("MountingA Constructor ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("MountingA getDerivedFromProps Method");
    return null; //has to return state, here returning null
  }

  componentDidMount() {
    console.log("MountingA ComponentDidMount");
  }
  render() {
    console.log("MountingA render Method");
    return (
      <div>
        <h1>Mounting Phase Tutorial</h1>
        <div>{<MountingB />}</div>
      </div>
    );
  }
}

export default MountingA;
