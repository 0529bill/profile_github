import React, { useEffect, useState } from 'react';
import backgroundImg from '../../pic/background.jpg';
import './App.scss';
import LayoutCard from '../LayoutCard/LayoutCard';

function App() {
  let [loopTitle, setloopTitle] = useState('');
  let [showText, setshowText] = useState(null);
  let [clicked, setClicked] = useState(false);

  let intervals = () => {
    if (loopTitle == 'Bill') {
      setloopTitle('developer');
    } else if (loopTitle == 'developer') {
      setloopTitle('ocean Lover');
    } else {
      setloopTitle('Bill');
    }
  };

  useEffect(() => {
    let interval = setInterval(
      () => intervals(),

      5000
    );
    return () => clearInterval(interval);
  }, [loopTitle]);

  let handleClick = () => {
    setClicked(true);
    setshowText(!showText);
  };

  return (
    <>
      <div className="background" id="home">
        <img
          className="background__img"
          src={backgroundImg}
          alt="background"
          width="100%"
        />

        <p className="background__sideTitle">Hi!</p>
        <button className="background__button" onClick={() => handleClick()}>
          Nav
        </button>
        <div>
          <a href="#home">
            <p
              className="background__navText  background__navText--1 "
              style={{ display: showText ? null : 'none' }}
              // style={coverStyle}
            >
              Home
            </p>
          </a>
          <a href="#aboutMe">
            <p
              className="background__navText background__navText--2"
              style={{ display: showText ? null : 'none' }}
            >
              About Me
            </p>
          </a>
          <a href="#projects">
            <p
              className="background__navText  background__navText--3"
              style={{ display: showText ? null : 'none' }}
            >
              Projects
            </p>
          </a>
        </div>
        <p className="background__title1">Hi, i am</p>
        <p className="background__title2">{loopTitle}</p>
      </div>
      <div className="content">
        <div className="content__pageone" id="aboutMe">
          <div className="content__text content__text--first">About me</div>
          <div className="content__aboutme content__aboutme--first">
            I am currently a student double major in English literature and Big
            data at Soochow University. I love building interesting projects
            that can help me learn new skills. Personally, I love surfing
            because waves are always different and thus every surf session is
            unique and special. I am a very hard-working person and I believe
            with my competitive mindset, I would be a valuable asset to your
            company.
          </div>
        </div>

        <LayoutCard />
        <div className="content__pagethree">
          <div className="content__text content__text--third">Contact Me</div>
          <div className="content__aboutme content__aboutme--third ">
            <a href="mailto:0529bill@gmail.com" target="_blank">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/0529bill" target="_blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.cakeresume.com/water-lin-c9114f"
              target="_blank"
            >
              <i class="fa fa-paperclip" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
