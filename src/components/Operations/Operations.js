import React, { Component } from "react";
import Operation from "../Operation/Operation";

class Operations extends Component {
  state = {
    type: ["move", "copy", "rename", "delete"]
  };

  handleClick = op => {
    // TODO: operations
    switch (op) {
      case "move":
        alert("move this file to ...");
        break;
      case "copy":
        alert("copy this file ...");
        break;
      case "rename":
        alert("rename this file ...");
        break;
      case "delete":
        alert("delete this file ...");
        break;
      default:
        alert("something is going to happen ...");
        break;
    }
  };

  render() {
      const opList = this.state.type.map((item) => <Operation name={item} click={() => this.handleClick(item)}/>);
    return <div>{opList}</div>
  }
}

export default Operations;
