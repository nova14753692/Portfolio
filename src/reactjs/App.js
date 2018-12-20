import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import About from './About';
import "../css/App.css";
import MainMenu from './MainMenu';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {

  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
    this.closeContent = this.closeContent.bind(this);
    this.openContent = this.openContent.bind(this);
  }

  openContent = () => {
    const content = document.getElementsByClassName("content")[0];
    const mainMenu = document.getElementsByClassName("main-menu")[0];
    content.style.display = "block";
    mainMenu.style.display = "block";
    this.navigate("about");
    document.getElementsByClassName("btn-warning")[0].style.display = "block";
  }

  navigate = (blockId) => {
    const page = document.getElementById(blockId);
    page.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  closeContent = () => {
    document.getElementById("welcome-page").scrollIntoView({behavior: 'smooth'});

    const interval = setInterval(() => {
      if (window.scrollY === 0)
      {
        document.getElementsByClassName("content")[0].style.display = "none";
        document.getElementsByClassName("main-menu")[0].style.display = "none";
        document.getElementsByClassName("btn-warning")[0].style.display = "none";
        clearInterval(interval);
      }
    }, 200);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid" id="welcome-page">
          <WelcomePage openContent={this.openContent}/>
        </div>
        <div className="container-fluid content">
          <div className="card sticky-top main-menu">
            <MainMenu navigate={this.navigate}/>
          </div>
          <div id="about">
            <About/>
          </div>
          <div id="portfolio">
            <Portfolio/>
          </div>
          <div id="contact">
            <Contact/>
          </div>
          <button className="btn btn-warning" onClick={this.closeContent}>Close</button>
        </div>
      </div>
    );
  }
}

export default App;
