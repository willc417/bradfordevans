import React from 'react';
import AppBar from './NavBar.js'

import './FrontPage.css';
import brad_asleep from '../images/brad_asleep.jpg'
import NavBar from './NavBar.js'
//import Spotify from '../LinkWidgets/Spotify'

class FrontPage extends React.Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <body className="Background">
      <img src={brad_asleep} className="fullSizeImage" alt="logo" />
      </body>
      </div>
    );
    }
}

export default FrontPage;
