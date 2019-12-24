import React from 'react';
import './App.css';

import story from '../images/story_page.jpg'


class Story extends React.Component {
  render () {
    return (
      <div className="storyPageBackground">
      <img className="storyPageImage" src={story} alt="brad with guitar"/>
      <p className="storyPageText">
      Based in Memphis, Tennessee, Bradford Evans crafts a rich sound inspired by a vast array of influences.
      Armed with his guitar, Bradford keeps listeners rocking while touching on themes of love and loneliness in a way that’s intimate yet relatable.
      In 2016, Bradford released <i>Araby</i>, a 9-track record written over the course of several years that displays his range and potential.
      The release was accompanied by a music video for lead single, “Whisper Not” created alongside Matt West.
      Following <i>Araby</i>, the Flying V’s (Bradford as lead guitar and singer) released their EP "But We Were Just Getting Started…" in 2017.
      Bradford has also collaborated with Roc Sherrell for several tracks including Bradford’s 2019 single “Gwynplaine”.
      </p>
      </div>
    );
  }
}

export default Story;
