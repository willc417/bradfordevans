import React from 'react';
import './LinkWidgets.css';


function Spotify() {
  return (
    <button className="SmallWidget">
    <a href="https://open.spotify.com/artist/0WjyRXQHK9P1IXRzgfrU0a">
      <img src={require("../images/spotify.jpg")} alt="Spotify"/>
    </a>
    </button>
  );
}

  export default Spotify;
