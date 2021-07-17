import React, { Component } from "react";

class MountingB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "React Mounting ",
    };
    console.log("MountingB Constructor ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("MountingB getDerivedFromProps Method");
    return null; //has to return state, here returning null
  }

  componentDidMount() {
    console.log("MountingB ComponentDidMount");
  }
  render() {
    console.log("MountingB render Method");
    return (
      <div>
        <h1>Mounting Phase Tutorial</h1>
      </div>
    );
  }
}

export default MountingB;
