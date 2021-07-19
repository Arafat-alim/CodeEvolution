import React, { PureComponent } from "react";

export default class RegularComp extends PureComponent {
  render() {
    console.log("Regular Component");
    return <div>Regular Component {this.props.name}</div>;
  }
}
