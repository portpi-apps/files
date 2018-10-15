import React, { Component } from "react";
import FileDetail from "../FileDetail/FileDrtail";
import Operations from "../Operations/Operations";
import ListItem from "@material-ui/core/ListItem";

class FileListItem extends Component {
  render() {
    return (
      <ListItem button onClick={this.props.click}>
        <FileDetail name={this.props.name} />
        <Operations type={this.props.type}/>
      </ListItem>
    );
  }
}
export default FileListItem;