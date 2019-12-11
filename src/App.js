import React from 'react';
import cssLogo from './images/CSS.png';
import htmlLogo from './images/html.png'
import githubLogo from './images/GitHub-Mark-Light-64px.png';
import linkedInLogo from './images/LinkedInLogo.png';
import freshlyGrown from './images/freshly-grown.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import habitual from './images/Habitual.png';
import utterNonsense from './images/UtterNonsense.png'
import simon from './images/Simon.png'
import aboutImage from './images/CircleImage.jpg'
import tacoLogo from './images/TacoLogo.svg'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <nav>
          <a href="https://github.com/sunnysideupegle"><img src={githubLogo} />
          </a>
          <a href="https://www.linkedin.com/in/rose-egle-519280195/"><img src={linkedInLogo} color="white" /></a>
        </nav>
            <div className="header-title">
              <h1 className="animated slideInLeft">rose egle</h1>
              <div className="taco"></div>
            </div>
            <div className="header-tagline animated slideInLeft delay-0.5s">
              <h2>Blending logic, aesthetics and tacos.</h2>
            </div>
      </header>
     
      <div className="work">
        <h1>Work</h1>
      <div className="work-container">
         <div className="work-img-div">
           <a href="https://freshly-grown.herokuapp.com"><img src={freshlyGrown} className="work-img"/></a>
         </div>
        <div className="work-desc-div">
          <h2>Freshly Grown</h2>
          <p>An online farmers market, with the purpose of making it easier for farmers to sell produce to restaurants.</p>
          <h3>Skills</h3>
          <p>React, AJAX, Python, SQL, Javascript, Node, CSS and HTML</p>
          <button><a href="https://github.com/sunnysideupegle/freshly-grown">GitHub Repo</a></button>
        </div>
       </div>
       <div className="work-container">
        <div className="work-desc-div">
          <h2>Habitual</h2>
          <p>An app to make habit tracking easier and more fun, with an easy to use interface and a randomly generated reward for the amount of tasks completed.</p>
          <h3>Skills</h3>
          <p>React, AJAX, MongoDB, Javascript, Node.js, CSS and HTML</p>
          <button><a href="https://github.com/sunnysideupegle/habitual">GitHub Repo</a></button>
        </div>
        <div className="work-img-div">
           <a href="https://habit-project-three.herokuapp.com/"><img src={habitual} className="work-img"/></a>
         </div>
       </div>
       <div className="work-container">
         <div className="work-img-div">
           <a href="https://project-two-rose-egle.herokuapp.com"><img src={utterNonsense} className="work-img"/></a>
         </div>
        <div className="work-desc-div">
          <h2>Utter Nonsense</h2>
          <p>Remake of the classic mad-libs with a new-age, internet-centric spin, letting users add photos and hashtags.</p>
          <h3>Skills</h3>
          <p> HTML, CSS, JavaScript, Node, Express, and MongoDB</p>
          <button><a href="https://github.com/sunnysideupegle/utter-nonsense">GitHub Repo</a></button>
        </div>
       </div>
       <div className="work-container">
        <div className="work-desc-div">
          <h2>Simon</h2>
          <p>All the wonder of the Simon game with the add fun of Bop-it functionality.</p>
          <h3>Skills</h3>
          <p>Javascript, CSS and HTML</p>
          <button><a href="https://github.com/sunnysideupegle/Simon">GitHub Repo</a></button>
        </div>
        <div className="work-img-div">
           <a href="http://simonbyroseegle.surge.sh/"><img src={simon} className="work-img"/></a>
         </div>
       </div>

      </div>
      <div className="skills-container">
        <div className="skills-div">
        <h1>Skills</h1>
        <div className="icons">
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
      </div>
      <div className="about">
          <img src={aboutImage} className="animated fadeIn" />
          <div className="about-paragraph">
          <h1>About</h1>
            <p>I grew up in the mountains of North Carolina and I have a background in graphic design and upper level restaurant management.  This year I became a Software Engineering Fellow at General Assembly. </p>
              <p>I chose to pursue software engineering because it presents the opportunity to blend the analytical and logical part of my brain with the creative, aesthetically focused part.  I love how intellectually stimulating code is.  Making clean, functional code that is intuitive to use and pairing it with beautiful design is an immensely satisfying challenge for me.</p>
          </div>
        </div>
    
      <div className="contact">
      <img src={tacoLogo} width="200"/>
      <div className="contact-info">
      <a href="https://github.com/sunnysideupegle"><h3>GitHub</h3></a>
      <a href="https://www.linkedin.com/in/rose-egle-519280195/"><h3>LinkedIn</h3></a>
        <h3>EMAIL</h3>
        <p>rosiemegle89@gmail.com</p>
        </div>
      </div>
    <div className="copyright">
      <p>Copyright Rose Egle 2019</p>
    </div>
    </div>
    {/* <Switch>
      <Route exact path='/' component={App} />
      

    </Switch> */}
    </Router>
  );
}

export default App;
