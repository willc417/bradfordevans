import React from 'react';
import "./App.css"

import spotify from '../images/spotify.jpg'
import apple from '../images/apple_music.jpg'
import soundcloud from '../images/soundcloud.png'
import bandcamp from '../images/bandcamp.png'


class ExternalLinks extends React.Component {
  render() {
    return(<div>
            <ul className="logoList">
            <li className="logoListItem"> <a href="https://open.spotify.com/artist/0WjyRXQHK9P1IXRzgfrU0a"><img className="logo" src={spotify}/></a></li>
            <li className="logoListItem"> <a href="https://music.apple.com/us/artist/bradford-evans/1485008643"><img className="logo" src={apple}/></a></li>
            <li className="logoListItem"> <a href="https://soundcloud.com/bradfordevans"><img className="logo" src={soundcloud}/></a></li>
            <li className="logoListItem"> <a href="https://bradfordevans.bandcamp.com/releases"><img className="logo" src={bandcamp}/></a></li>

            </ul>
        </div>
      );
  }
}

export default ExternalLinks;
