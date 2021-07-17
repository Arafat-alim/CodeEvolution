import React, { Component } from "react";

export default class MultipleInputHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    const pas =
      e.target.name === "password"
        ? e.target.value.toUpperCase()
        : e.target.value;
    console.log(pas);
    this.setState({
      [e.target.name]: pas,
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
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
