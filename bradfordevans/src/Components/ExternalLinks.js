import React from 'react';
import "./App.css"

import spotify from '../images/spotify.png'
import apple from '../images/apple.jpg'
import soundcloud from '../images/soundcloud.png'
import bandcamp from '../images/bandcamp.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'



class ExternalLinks extends React.Component {
  render() {
    return(<div>
            <ul className="logoList">
            <li className="logoListItem"> <a href="https://open.spotify.com/artist/0WjyRXQHK9P1IXRzgfrU0a">
            <img className="logo" alt="Spotify Logo" src={spotify}/></a></li>
            <li className="logoListItem"> <a href="https://music.apple.com/us/artist/bradford-evans/1485008643">
            <img className="logo" alt="Apple Music Logo"src={apple}/></a></li>
            <li className="logoListItem"> <a href="https://soundcloud.com/bradfordevans">
            <img className="logo" alt="Soundcloud Logo" src={soundcloud}/></a></li>
            <li className="logoListItem"> <a href="https://bradfordevans.bandcamp.com/releases">
            <img className="logo" alt="Bandcamp Logo"src={bandcamp}/></a></li>
            <li className="logoListItem"> <a href="https://www.facebook.com/bradfordevansmusic/">
            <img className="logo" alt="Facebook Logo"src={facebook}/></a></li>
            <li className="logoListItem"> <a href="https://www.instagram.com/bradford.evans/">
            <img className="logo" alt="Instagram Logo"src={instagram}/></a></li>
            </ul>
        </div>
      );
  }
}

export default ExternalLinks;
