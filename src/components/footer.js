import React, { Component } from "react";
import './footer.css';
import { Link } from 'react-router-dom';
import ArrowRight from '../icons/arrow-right.svg';

class footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-left">
                    <div className="thanks">
                        <div className="footer-title">
                            <p>Thanks for scrolling!</p>
                        </div>
                        <div className="footer-thanks-text">
                            <p>Please reach out if you want to learn more about myself,
                            my projects, or just talk! </p>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-contact">
                        <div className="footer-title"><p>Contact me</p></div>
                        <div className="footer-email">
                            <p>chrisleerod@gmail.com</p>
                            <p>+1 615-971-6558</p>
                        </div>
                    </div>
                    <div className="footer-navigation">
                        <div className="footer-title"><p>Navigation</p></div>
                        <div className="footer-nav-container">
                            <ul className="footer-nav">
                                <Link to="/">
                                    <li>Work</li>
                                </Link>
                                <Link to="/about">
                                    <li>About</li>
                                </Link>
                                <Link to="/process">
                                    <li>Process</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-title">
                            <p>Links</p>
                        </div>
                        <div className="footer-links-container">
                            <ul className="footer-links">
                                <a target="_blank" href="https://github.com/chrisleerod">
                                    <li>GitHub ↗︎</li>
                                </a>
                                <a target="_blank" href="https://linkedin.com/in/chrisleerod">
                                    <li>LinkedIn ↗︎</li>
                                </a>
                                <a target="_blank" href="https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view">
                                    <li>Resume ↗︎</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;