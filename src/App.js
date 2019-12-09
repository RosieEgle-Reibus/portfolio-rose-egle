import React from 'react';
import cssLogo from './images/CSS.png';
import htmlLogo from './images/html.png'
import githubLogo from './images/GitHub-Mark-Light-64px.png';
import linkedInLogo from './images/LinkedInLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="https://github.com/sunnysideupegle"><img src={githubLogo} />
          </a>
          <a href="https://www.linkedin.com/in/rose-egle-519280195/"><img src={linkedInLogo} color="white" /></a>
        </nav>
  
     
            <div className="header-title">
              <h1>rose egle</h1>
              <div className="taco"></div>
            </div>

            <div className="header-tagline">
              <h2>Blending logic, aesthethics and tacos.</h2>
            </div>
        
   
      </header>
      <div className="about">
        <div className="about-div">
          <h1>about</h1>
          <div className="about-paragraph">
            <p>I have a background in graphic design and upper level restaurant management and this year I became a Software Engineering Fellow at General Assembly.  I chose to pursue software engineering because it presents the opportunity to blend the analytical and logical part of my brain with the creative, aesthetically focused part.  I love how intellectually stimulating code is.  Making clean, functional code that is intuitive to use and pairing it with beautiful design is an immensely satisfying challenge for me.</p>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="icons">
          <i class="devicon-html5-plain"></i>
          <i class="devicon-css3-plain"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-nodejs-plain"></i>
          <i class="devicon-mongodb-plain-wordmark"></i>
          <i class="devicon-postgresql-plain-wordmark"></i>
          <i class="devicon-python-plain"></i>
          <i class="devicon-django-plain"></i>
          <i class="devicon-photoshop-line"></i>
          <i class="devicon-illustrator-line"></i>
        </div>
      </div>
      <div className="taco"></div>

    </div>

  );
}

export default App;
