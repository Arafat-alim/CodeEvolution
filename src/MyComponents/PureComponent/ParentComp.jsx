import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export default class ParentComp extends PureComponent {
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
    console.log("*************PArent Component********************");
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}
