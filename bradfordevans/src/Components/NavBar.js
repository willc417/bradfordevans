import React from 'react';

import AppBar from '@material-ui/core/AppBar';

class NavBar extends React.Component {

  render() {
     return(
    <AppBar position="static" style={{backgroundColor: 'black'}}>
      <text>Bradford Evans</text>
    </AppBar>);
  }
}

export default NavBar;
