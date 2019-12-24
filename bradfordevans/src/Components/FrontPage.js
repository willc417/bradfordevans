import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

import story_0 from '../images/story_0.jpg'
import story_1 from '../images/story_1.jpg'
import audio_0 from '../images/audio_0.jpg'
import audio_1 from '../images/audio_1.jpg'
import visual_0 from '../images/visual_0.jpg'
import visual_1 from '../images/visual_1.jpg'

class FrontPage extends React.Component {
  render() {
    return (
      <div className="imageHolder">
      <Link to="/music" className="textLink">
      <div>
      <img className="frontPageImage"
          alt="Brad with a guitar"
          src={audio_0}
          onMouseOver={e => (e.currentTarget.src = audio_1)}
          onClick={e => (e.currentTarget.src = audio_1)}
          onMouseOut={e => (e.currentTarget.src = audio_0)}/>
      <p className="frontPageText" style={{textShadow: "0 0 0.2em blue"}}>Music</p>
      </div>
      </Link>
      <Link to="/story" className="textLink">
      <div >
      <img className="frontPageImage" src={visual_0}
          alt="Brad in bed"
          onMouseOver={e => (e.currentTarget.src = visual_1)}
          onMouseOut={e => (e.currentTarget.src = visual_0)}
          onClick={e => (e.currentTarget.src = visual_1)}/>
      <p className="frontPageText" style={{textShadow: "0 0 0.2em gold"}}>Story</p>
      </div>
      </Link>
      <Link to="/video" className="textLink">
      <div>
      <img className="frontPageImage" src={story_0}
          alt="Brad with a red sweater"
          onMouseOver={e => (e.currentTarget.src = story_1)}
          onClick={e => (e.currentTarget.src = story_1)}
          onMouseOut={e => (e.currentTarget.src = story_0)}/>
      <p className="frontPageText" style={{textShadow: "0 0 0.2em red"}}>Video</p>
      </div>
      </Link>
      </div>

    );
    }
}

export default FrontPage;
