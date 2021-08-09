import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.delete = this.delete.bind(this);
  }

  addBox(box) {
    let newBox = { ...box, id: Date.now().toString() };
    this.setState((state) => ({
      boxes: [...state.boxes, newBox],
    }));
  }

  delete(e) {
    e.target.parentElement.remove();
    const targetId = e.target.parentElement.id;
    const filteredBoxes = this.state.boxes.filter((box) => box.id !== targetId);

    // Can't get the array to update
    // this.setState((state) => ({ boxes: [...filteredBoxes] }));
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        key={box.id}
        id={box.id}
        height={`${box.height}px`}
        width={`${box.width}px`}
        backgroundColor={box.backgroundColor}
        delete={this.delete}
      />
    ));

    return (
      <div className="BoxList">
        <h1>Box Maker</h1>
        <NewBoxForm addBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
