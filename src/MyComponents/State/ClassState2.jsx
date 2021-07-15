import React, { Component } from "react";

class classState2 extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  onIncrement() {
    //direct state updating -wrong way to do this
    //this.state.count = this.state.count + 1;

    //doing with a setState to render my value on the dom
    //     this.setState(
    //       //Recommended way to do this
    //       {
    //         count: this.state.count + 1,
    //       },
    //       () => {
    //         console.log("CallBack Value ", this.state.count);
    //       }
    //     );
    //     console.log(this.state.count);
    // Here We are going to do like this - if my prev State value is important
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    // console.log("CallBack Value ", this.state.count);
  }

  incrementFive() {
    // here my prev state is important to update
    this.onIncrement();
    this.onIncrement();
    this.onIncrement();
    this.onIncrement();
    this.onIncrement();
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <h1>Count</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default classState2;
