import React, { Component } from "react";

export default class DropDownCASD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DDL1: [],
      DDL2: [],
      selectedddl: "",
    };
  }

  componentDidMount() {
    this.setState({
      DDL1: [
        { name: "Color", DDL2: ["Red", "Green", "Yellow", "Pink"] },
        { name: "Sports", DDL2: ["Cricket", "football", "Rugby", "Swimming"] },
        { name: "Food", DDL2: ["Biryani", "KOfta", "Malai", "Dosa"] },
        { name: "CountryName", DDL2: ["India", "Pakistan", "Europe", "USA"] },
      ],
    });
  }

  selectChange(e) {
    this.setState({ selectedddl: e.target.value });
    this.setState({
      DDL2: this.state.DDL1.find((x) => x.name === e.target.value).DDL2,
    });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Cascading Drop Down List</h1>
          <select
            value={this.state.selectedddl}
            onChange={(e) => this.selectChange(e)}
          >
            {this.state.DDL1.map((x, i) => {
              return (
                <option key={i} value={x.name}>
                  {x.name}
                </option>
              );
            })}
          </select>
          <select>
            <option value={this.state.selectedddl} disabled>
              -----
            </option>
            {this.state.DDL2.map((x, i) => {
              return (
                <option key={i} value="">
                  {x}
                </option>
              );
            })}
          </select>
        </center>
      </div>
    );
  }
}
