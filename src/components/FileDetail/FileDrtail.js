import React, { Component } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

class FileDetail extends Component {
  render() {
    let icon = <FolderIcon />;
    if (this.props.type == "file") {
      icon = <InsertDriveFile />;
    }

    return (
      <React.Fragment>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={this.props.name} />
      </React.Fragment>
    );
  }
}

export default FileDetail;
