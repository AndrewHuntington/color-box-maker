import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({ height: "", width: "", backgroundColor: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="width">Width</label>
          <input
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="backgroundColor">backgroundColor</label>
          <input
            name="backgroundColor"
            id="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          ></input>
        </div>

        <button>Add a new box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
