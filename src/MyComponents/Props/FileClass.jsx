import React, { Component } from "react";

class FileClass extends Component {
  render() {
    console.log(this);

    return (
      <div>
        <h1>Hello! {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default FileClass;
