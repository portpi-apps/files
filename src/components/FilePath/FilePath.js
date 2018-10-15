import React, { Component } from "react";

const style = {
  margin: "20px",
  textAlign: "center"
};

class Path extends Component {
  render() {
    return <div style={style}>{this.props.path}</div>;
  }
}

export default Path;
