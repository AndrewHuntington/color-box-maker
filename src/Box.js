import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.delete(e);
  }

  render() {
    return (
      <div style={this.props} id={this.props.id}>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;
