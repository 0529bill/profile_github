import React from 'react';
import './LayoutCard.scss';

import movieSearch from '../../pic/movieSearch.PNG';
import covidTracker from '../../pic/covie-tracker.png';
import tictactoeGame from '../../pic/tictactoeGame.png';
import instachat from '../../pic/instachat.png';

let LayoutCard = () => {
  return (
    <>
      <div className="content__pagetwo" id="projects">
        <div className="content__text content__text--second">projects</div>
        <div
          className="content__layoutCard--1"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="2000"
        >
          <a href="https://github.com/0529bill/movie-search" target="_blank">
            <img className="content__layoutCard--img" src={movieSearch} />
          </a>
        </div>
        <div
          className="content__layoutCard--1"
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="2000"
        >
          <a
            href="https://github.com/0529bill/covid-19-tracker"
            target="_blank"
          >
            <img className="content__layoutCard--img" src={covidTracker} />
          </a>
        </div>
        <div
          className="content__layoutCard--1"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="2000"
        >
          <a
            href="https://github.com/0529bill/tic-tac-toe_game"
            target="_blank"
          >
            <img className="content__layoutCard--img" src={tictactoeGame} />
          </a>
        </div>
        <div
          className="content__layoutCard--1"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="2000"
        >
          <a href="https://github.com/0529bill/chat-room" target="_blank">
            <img className="content__layoutCard--img" src={instachat} />
          </a>
        </div>
      </div>
    </>
  );
};

export default LayoutCard;
