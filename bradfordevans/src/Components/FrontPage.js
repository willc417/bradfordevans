import React from 'react';
import './App.css';
import NavBar from './NavBar.js'
import Footer from "./Footer.js"

import story_0 from '../images/story_0.jpg'
import story_1 from '../images/story_1.jpg'
import audio_0 from '../images/audio_0.jpg'
import audio_1 from '../images/audio_1.jpg'
import visual_0 from '../images/visual_0.jpg'
import visual_1 from '../images/visual_1.jpg'

class FrontPage extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <div className="imageHolder">
      <div>
      <img className="frontPageImage" src={audio_0}
          onMouseOver={e => (e.currentTarget.src = audio_1)}
          onMouseOut={e => (e.currentTarget.src = audio_0)}/>
      <p className="frontPageText">Music</p>
      </div>
      <div>
      <img className="frontPageImage" src={visual_0}
          onMouseOver={e => (e.currentTarget.src = visual_1)}
          onMouseOut={e => (e.currentTarget.src = visual_0)}/>
      <p className="frontPageText">Story</p>
      </div>
      <div>
      <img className="frontPageImage" src={story_0}
          onMouseOver={e => (e.currentTarget.src = story_1)}
          onMouseOut={e => (e.currentTarget.src = story_0)}/>
      <p className="frontPageText">Video</p>
      </div>
      </div>
      <Footer/>
      </div>
    );
    }
}

export default FrontPage;
