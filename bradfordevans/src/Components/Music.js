import React from 'react';
import './App.css';

class Music extends React.Component {
  render () {
    return (
      <div className="musicPageBackground">
      <div className="musicPageBackgroundImage">
      <ul className="spotifyLinkList">
        <li className="musicPageItem">
          <iframe title="Gwynplaine Player" src="https://open.spotify.com/embed/track/1PNLld0FBm2yo1pcD6Z0Qx"
          width="300" height="380"
          frameborder="0"
          allowtransparency="true" allow="encrypted-media"/>
        </li>
        <li>
          <iframe title="Routine Player" src="https://open.spotify.com/embed/track/5g1KZi3dvTQxgUeXfP16YT"
          width="300" height="380"
          frameborder="0" allowtransparency="true" allow="encrypted-media"/>
        </li>
        <li>
          <iframe title="She Wrote Player" src="https://open.spotify.com/embed/track/0pbOeZaf1r5eGp3cohACbY"
          width="300" height="380"
          frameborder="0" allowtransparency="true" allow="encrypted-media"/>
        </li>
      </ul>
      <ul className="spotifyLinkList">
      <li>
        <iframe title="Araby Player" style={{border: 0, width: 400, height: 439}}
        src="https://bandcamp.com/EmbeddedPlayer/album=2869411034/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless>
        <a href="http://bradfordevans.bandcamp.com/album/araby">Araby by Bradford Evans</a>
        </iframe>
      </li>
      <li>
        <iframe src="https://open.spotify.com/embed/album/2NzDQildLvQnW0PbkBGKTp" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
      </li>

      </ul>
      </div>
      </div>
    );
  }
}

export default Music;
