import React, { Component } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';

class navbar extends Component {
    render() {
        return (
            <div className="nav-container2">
                <header className="nav-container">
                    <div className="nav">
                        <div className="left">
                            <ul className="logo">
                                <Link to="/">
                                    <li>Chris Rodriguez</li>
                                </Link>
                            </ul>
                        </div>
                        <ul className="right">
                            <Link to="/">
                                <li>Work</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="nav-bg"></div>
                </header>
            </div>
        );
    }
}

export default navbar;