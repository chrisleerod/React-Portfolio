import React, { Component } from "react";
import './mobilnav.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

class mobilenav extends Component {
    render() {
        return (
            <div className="mobile-nav-container2">
                <header className="mobile-nav-container">
                    <div className="mobile-nav">
                        <div className="mobile-left">
                            <ul className="mobile-logo">
                                <Link to="/">
                                    <li>Chris Rodriguez</li>
                                </Link>
                            </ul>
                        </div>
                        <ul className="mobile-right">
                            <Link to="/">
                                <li>Work</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="mobile-nav-bg"></div>
                </header>
            </div>
        );
    }
}

export default mobilenav;