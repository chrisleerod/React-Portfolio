import React, { useCallback } from "react";
import { motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { MenuToggle } from './menutoggle';

import { Navigation } from "./navigation";

import './navbar.css';

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
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 40
      }
    }
  };

const useStyles = (open) => {
    document.body.classList = open ? 'overflow-hidden' : '';
}

export default function () {
    const [isOpen, toggleOpen] = useCycle(false, true);

    useStyles(isOpen);

    const handleToggle = useCallback(() => toggleOpen(), [toggleOpen]);

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
                            <MenuToggle toggle={handleToggle} />
                        </motion.div>
                        <Navigation toggle={handleToggle} />
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
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view?usp=sharing">
                        <li>Resume</li>
                    </a>
                </ul>
            </div>
            <div className="nav-bg"></div>
        </header>
    );
}