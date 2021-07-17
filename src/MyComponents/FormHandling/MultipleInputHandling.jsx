import React, { Component } from "react";

export default class MultipleInputHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUser}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePass}
            />
          </div>
        </form>
      </div>
    );
  }
}
