import React, { Component } from "react";
import MemoComponent from "./MemoComponent";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Arafat",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Arafat",
      });
    }, 2000);
  }

  render() {
    console.log("**************Parent Component******************");
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}
