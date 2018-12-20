import React, { Component } from 'react'
import "../css/contact.css";

class Contact extends Component {

    constructor() {
        super();
        this.closeContent = this.closeContent.bind(this);
    }

    closeContent = () => {
        this.props.closeContent();
    }

    render() {
        return (
            <div>
                <div className="Contact">
                    <h1>Contact</h1>
                    <div className="row contact-content">
                    </div>
                    <button className="bt-sm bt-close-content" onClick={this.closeContent}>
                            <img src={require("../img/double-arrow-up-64.png")}/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;