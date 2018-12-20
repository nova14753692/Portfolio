import React, { Component } from 'react'
import "../css/about.css";

class About extends Component {
    render() {
        return (
            <div>
                <div className="About">
                    <h1>About</h1>
                    <div className="row perk">
                        <div className="col">
                            <image></image>
                            Fast-learner
                        </div>
                        <div className="col">
                            <image></image>
                            Tech-savvy
                        </div>
                        <div className="col">
                            <image></image>
                            Cooperative</div>
                        <div className="col">
                            <image></image>
                            Hard worker
                        </div>
                    </div>
                    <div className="row summary">
                        <div className="col-6">
                            <image>

                            </image>
                            <div>
                                <p style={{margin: '2%', fontSize: 24, fontWeight: 'bold'}}>Who's this guy?</p>
                                <p style={{margin: '5%', fontSize: 18}}>I'm a Computer Science student at University of Houston.<br/>
                                Coding is my life, computer is my love, tech is my food, 
                                    and playing games and making games are my passion.</p>
                            </div>
                            
                        </div>
                        <div className="col-6">My experience</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;