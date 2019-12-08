import React from 'react';
import logo from './logo.svg';
import githubLogo from './images/GitHub-Mark-Light-64px.png';
import linkedInLogo from './images/LinkedInLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav-hack"></div>
        <a href="https://github.com/sunnysideupegle"><img src={githubLogo}/>
          </a>
      <a href="https://www.linkedin.com/in/rose-egle-519280195/"><img src={linkedInLogo} color="white"/></a>
        </nav>
      
        <div className="header-div">
        <div className="header-container">
         <h1>rose egle</h1>
         <h2>Blending logic, aesthethics and tacos.</h2>
         </div>
         </div>
      </header>
      <div className="about">
        <h1>about</h1>
      </div>
    </div>
  );
}

export default App;
