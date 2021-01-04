import React, { Component, useRef } from "react";
import { motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { useDimensions } from '../../hooks/useDimentions';

import { MenuToggle } from './menutoggle';

import { Navigation } from "./navigation";

import './navbar.css';
import './mobile.css';

const background = {
    open: {
      height: '200vh',
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 2
      }
    },
    closed: {
      height: '72px',
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 40
      }
    }
  };

export default function () {
    const [isOpen, toggleOpen] = useCycle(false, true);

    if (isMobile) {
        return (
            <header className="mobile-nav-container">
                    <motion.nav
                        initial={false}
                        animate={isOpen ? 'open' : 'closed'}
                        className="mobile-nav"
                    >
                        <motion.div variants={background} className="nav-flex-container">
                            <Link className="mobile-logo" to="/">Chris Rodriguez</Link>
                            <MenuToggle toggle={() => toggleOpen()} />
                        </motion.div>
                        <Navigation />
                    </motion.nav>
            </header>
        );
    }

    return (
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
    );
}