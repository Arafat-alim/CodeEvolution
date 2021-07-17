import React, { Component } from "react";

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " ",
      textarea: " ",
      topics: "React",
    };
  }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleComment = (e) => {
    this.setState({
      textarea: e.target.value,
    });
  };

  handleTopic = (e) => {
    this.setState({
      topics: e.target.value,
    });
  };

  handleSubmit = (e) => {
    alert(
      `Username - ${this.state.username}, Comments - ${this.state.textarea}, Topics - ${this.state.topics}`
    );
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              value={this.state.textarea}
              onChange={this.handleComment}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <label htmlFor="topics">Topics</label>
            <select
              name="topics"
              value={this.state.topics}
              onChange={this.handleTopic}
            >
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
            <div>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BasicForm;
