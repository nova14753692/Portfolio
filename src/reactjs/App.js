import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import About from './About';
import "../css/App.css";

class App extends Component {

  constructor() {
    super();
    this.showAbout = this.showAbout.bind(this);
  }

  showAbout = () => {
    const about = document.getElementById("about");
    about.style.display = "block";
    document.getElementsByClassName("btn-warning")[0].style.display = "block";
    about.scrollIntoView({behavior: 'smooth'});
  }

  closeAll = () => {
    document.getElementById("welcome-page").scrollIntoView({behavior: 'smooth'});

    const interval = setInterval(() => {
      if (window.scrollY == 0)
      {
        document.getElementById("about").style.display = "none";
        document.getElementsByClassName("btn-warning")[0].style.display = "none";
        clearInterval(interval);
      }
    }, 200);
  }

  render() {
    return (
        <div className="container-fluid App">
          <div id="welcome-page">
            <WelcomePage showAbout={this.showAbout.bind(this)}/>
          </div>
          <div id="about">
            <About/>
          </div>
          <button className="btn btn-warning" onClick={this.closeAll}>Close</button>
        </div>
    );
  }
}

export default App;
