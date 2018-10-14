import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import MyPortPiApp from 'files';

export default class App extends Component {
  render() {
    return (
      <section>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              PortPi files
            </Typography>
          </Toolbar>
        </AppBar>
        <MyPortPiApp text='Awesome!' />
      </section>
    );
  }
}
