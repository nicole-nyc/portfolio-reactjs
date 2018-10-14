import React from 'react';
// import { Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Home from './Home';
import Portfolio from "./Portfolio";
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

import NaYoung from './NaYoung';




class ContentArea extends React.Component {

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
        this.printState = this.printState.bind(this);
    }

    componentDidMount() {
        console.log('*** lol johnahnz0rs is l33t ***');
        console.log('*** compDidMount ***', this.state);
    }

    // showTab(tab) {
    //     // iterate through items in this.state.pages
    //     // if item == tab, then setState true
    //     // if item != tab, then setState false
    //     console.log(tab, typeof tab);
    //     console.log(this.state.contact);
    //     for (let i of this.state.tabs) {
    //         if (i === tab) {
    //             console.log('yes this matches', tab);
    //             // this.setState({tab: true});
    //             this.setState({contact: 1});
    //         } else {
    //             console.log('this doesnt match', i);
    //         }
    //         // console.log(i, tab);
    //         // tab.toString() === i.toString() ? this.setState({tab: true}) : this.setState({tab: false});
    //         // console.log(`this.state.${i}, ${this.state.i}`);
    //     }
    // }

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

    printState() {
        console.log('*** printing state ***', this.state);
    }


    render() {
        return (
            <React.Fragment>
                <div className="root-div">

                    <NaYoung />


                    {/*<div className="each-component">*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.showHome}>Home</button>*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.showPortfolio}>Portfolio</button>*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.showResume}>Resume</button>*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.showAbout}>About</button>*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.showContact}>Contact</button>*/}
                        {/*<button className="btn btn-sm btn-outline-primary fake-nav-btn" onClick={this.printState}>print state</button>*/}
                    {/*</div>*/}

                    {/*<div className="my-header">*/}
                        {/*<h1>John Ahn z0rs</h1>*/}
                        {/*<p>Cool guy. I love John Ahn.</p>*/}
                    {/*</div>*/}


                    {/*{this.state.home === 1 && <Home />}*/}
                    {/*{this.state.portfolio === 1 && <Portfolio />}*/}
                    {/*{this.state.resume === 1 && <Resume />}*/}
                    {/*{this.state.about === 1 && <About />}*/}
                    {/*{this.state.contact === 1 && <Contact />}*/}


                </div>
            </React.Fragment>
        );
    }
};

export default ContentArea;
