import React from 'react';
import PropTypes from 'prop-types';
import {Howl, Howler} from 'howler';



export default function MusicPlayer() {
  return (
    <>
      <div className="container player-container" id="player-container">
 
    <div id="title">
      <span id="track"></span>
      <div id="timer">0:00</div>
      <div id="duration">0:00</div>
    </div>


    <div className="controlsOuter">
      <div className="controlsInner">
        <div id="loading"></div>
        <div className="btn" id="playBtn"></div>
        <div className="btn" id="pauseBtn"></div>
        <div className="btn" id="prevBtn"></div>
        <div className="btn" id="nextBtn"></div>
      </div>
      <div className="btn" id="playlistBtn"></div>
      <div className="btn" id="volumeBtn"></div>
    </div>


    <div id="waveform"></div>
    <div id="bar"></div>
    <div id="progress"></div>

 
    <div id="playlist">
      <div id="list"></div>
    </div>

    <div id="volume" className="fadeout">
      <div id="barFull" className="bar"></div>
      <div id="barEmpty" className="bar"></div>
      <div id="sliderBtn"></div>
    </div>

  </div>
    </>
  );
}

