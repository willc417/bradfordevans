import React from 'react';
import './FrontPage.css';
import Spotify from '../LinkWidgets/Spotify'

function FrontPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../images/brad_asleep.jpg')} className="fullSizeImage" alt="logo" />
      </header>
      <text>Don't Sleep</text>
      <Spotify/>
    </div>
  );
}

export default FrontPage;
