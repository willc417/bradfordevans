import React from 'react';
import './App.css';

class Video extends React.Component {
  render () {
    return (
      <div className="videoPageBackground">
      <div className="videoHolder">
      <iframe className="iframe_video" title="Whisper_Not_Video"
        src="https://www.youtube.com/embed/oO6Nd6ehYss"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen/>
      </div>
      </div>
    );
  }
}

export default Video;
