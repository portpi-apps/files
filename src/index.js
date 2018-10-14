import React, { Component } from 'react';
import FilePath from './components/FilePath/FilePath';
import FileList from './components/FileList/FileList';

// TODO: emily remove this mock data
const list = [
  {
    name: "dir1",
    type: "directory"
  },
  {
    name: "file1",
    type: "file"
  },
  {
    name: "file2",
    type: "file"
  },
  {
    name: "dir2",
    type: "directory"
  }
];

export default class MyApp extends Component {
  render() {
    return (
      <div className="App">
        <FilePath path='/Users/Emily/Desktop' />
        <FileList list={list}/>
      </div>
    );
  }
}
