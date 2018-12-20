import React, { Component } from 'react'
import "../css/mainmenu.css";

class MainMenu extends Component {

    constructor() {
        super();
        this.welcomePage = this.welcomePage.bind(this);
        this.about = this.about.bind(this);
        this.portfolio = this.portfolio.bind(this);
        this.contact = this.contact.bind(this);
    }

    welcomePage = () => {
        this.props.navigate("welcome-page");
    }

    about = () => {
        this.props.navigate("about");
    }

    portfolio = () => {
        this.props.navigate("portfolio");
    }

    contact = () => {
        this.props.navigate("contact");
    }

    render() {
        return (
            <div className="MainMenu">
                <div className="row">
                    <div className="col-auto">
                        <button className="bt-menu" onClick={this.welcomePage}><a className="menu-text">HOME</a></button>
                    </div>
                    <div className="col-auto">
                        <button className="bt-menu" onClick={this.about}><a className="menu-text">ABOUT</a>
                    </button></div>
                    <div className="col-auto">
                        <button className="bt-menu" onClick={this.portfolio}><a className="menu-text">PORTFOLIO</a>
                    </button></div>
                    <div className="col-auto">
                        <button className="bt-menu" onClick={this.contact}><a className="menu-text">CONTACT</a>
                    </button></div>
                </div>
            </div>
        );
    }
}

export default MainMenu;