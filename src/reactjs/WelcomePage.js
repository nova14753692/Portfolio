import React, { Component } from 'react'
import About from './About';
import "../css/welcomepage.css";

class WelcomePage extends Component {

    constructor() {
        super();
        this.btViewClick = this.btViewClick.bind(this);
    }

    btViewClick = () => {
        this.props.openContent();
    }

    render() {
        return (
            <div>
                <div className="WelcomePage">
                    <div className="welcome_block">
                        <p className="welcome_line">
                            Hello, I'm <span>Ton Tran</span>
                            <br/>I'm currently senior Computer Science student
                        </p>
                        <button type="button" className="bt bt-view-work" onClick={this.btViewClick}>
                            View my works <span>🡺</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePage;