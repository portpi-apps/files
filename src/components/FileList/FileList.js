import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Operations from "../Operations/Operations";
import FileListItem from "../FileListItem/FileListItem";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: "0 auto"
  }
});

class FileList extends Component {
  handleClick = () => {
    alert("Clicked");
  };
  render() {
    const showList = this.props.list.map(item => {
      return (
        <FileListItem
          key={item.name}
          type={item.type}
          name={item.name}
          click={this.handleClick}
        />
      );
    });
    // const showList = this.props.list.map(item => {
    //   if (item.type === "file") {
    //     return (
    //       <ListItem key={item.name} button onClick={this.handleClick}>
    //         <ListItemIcon>
    //           <InsertDriveFile />
    //         </ListItemIcon>
    //         <ListItemText primary={item.name} />
    //         <Operations />
    //       </ListItem>
    //     );
    //   } else {
    //     return (
    //       <ListItem key={item.name} button onClick={this.handleClick}>
    //         <ListItemIcon>
    //           <FolderIcon />
    //         </ListItemIcon>
    //         <ListItemText primary={item.name} />
    //         <Operations />
    //       </ListItem>
    //     );
    //   }
    // });

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List component="nav">{showList}</List>
      </div>
    );
  }
}
FileList.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FileList);
