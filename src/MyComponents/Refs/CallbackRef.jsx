import React, { Component } from "react";

class CallbackRef extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      // Checking if my element is not empty
      this.cbRef.focus(); // accessing element directly.
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default CallbackRef;
