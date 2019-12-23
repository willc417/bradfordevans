import React from 'react';
import './App.css';

class Music extends React.Component {
  render () {
    return (
      <div className="musicPageBackground">
      <div className="musicContainer">
        <div className="musicPageItem">
          <iframe title="Gwynplaine Player" src="https://open.spotify.com/embed/track/1PNLld0FBm2yo1pcD6Z0Qx"
          className="iframe"
          allow="encrypted-media"/>
        </div>
        <div>
          <iframe title="Routine Player" src="https://open.spotify.com/embed/track/5g1KZi3dvTQxgUeXfP16YT"
          className="iframe" allow="encrypted-media"/>
        </div>
        <div>
          <iframe title="She Wrote Player" src="https://open.spotify.com/embed/track/0pbOeZaf1r5eGp3cohACbY"
          className="iframe"
          allow="encrypted-media"/>
        </div>
      <div>
        <iframe title="Araby Player" className="iframe_araby"
        src="https://bandcamp.com/EmbeddedPlayer/album=2869411034/size=large/bgcol=ffffff/divnkcol=0687f5/artwork=small/transparent=true/" seamless>
        <a href="http://bradfordevans.bandcamp.com/album/araby">Araby by Bradford Evans</a>
        </iframe>
      </div>
      <div>
        <iframe title="Vs" src="https://open.spotify.com/embed/album/2NzDQildLvQnW0PbkBGKTp" className="iframe"/>
      </div>
      </div>
      </div>
    );
  }
}

export default Music;
