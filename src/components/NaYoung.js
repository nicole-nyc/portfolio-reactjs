import React from "react";
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

class NaYoung extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            home: 1,
            portfolio: 0,
            resume: 0,
            about: 0,
            contact: 0,
            tabs: ['home', 'portfolio', 'resume', 'about', 'contact']
        };
        // this.showTab = this.showTab.bind(this);
        this.showHome = this.showHome.bind(this);
        this.showPortfolio = this.showPortfolio.bind(this);
        this.showResume = this.showResume.bind(this);
        this.showAbout = this.showAbout.bind(this);
        this.showContact = this.showContact.bind(this);
        // this.printState = this.printState.bind(this);
    }

    showHome() {
        this.setState({home: 1, portfolio: 0, resume: 0, about: 0, contact: 0});
    }

    showPortfolio() {
        this.setState({home: 0, portfolio: 1, resume: 0, about: 0, contact: 0});
    }

    showResume() {
        this.setState({home: 0, portfolio: 0, resume: 1, about: 0, contact: 0});
    }

    showAbout() {
        this.setState({home: 0, portfolio: 0, resume: 0, about: 1, contact: 0});
    }

    showContact() {
        this.setState({home: 0, portfolio: 0, resume: 0, about: 0, contact: 1});
    }
    render() {
        return (
            <React.Fragment>
                <div className="my-container row">
                    <div className="col-sm-2">
                        <div className="row">
                            <h4>NaYoung</h4>
                            <p>UX Engineer</p>
                        </div>
                        <div className="row">
                            <ul className="no-bullets">
                                <li onClick={this.showHome}>Home</li>
                                <li onClick={this.showPortfolio}>Portfolio</li>
                                <li onClick={this.showResume}>Resume</li>
                                <li onClick={this.showAbout}>About</li>
                                <li onClick={this.showContact}>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        {this.state.home === 1 && <Home />}
                        {this.state.portfolio === 1 && <Portfolio />}
                        {this.state.resume === 1 && <Resume />}
                        {this.state.about === 1 && <About />}
                        {this.state.contact === 1 && <Contact />}
                    </div>
                </div>

            </React.Fragment>
        );
    }
};

export default NaYoung;