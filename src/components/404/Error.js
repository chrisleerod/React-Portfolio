import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js';
import './Error.css';

export const Error = () => {
    return (
        <div className="error-wrapper">
            <Navbar />
            <div></div>
            <div className="spacer1"></div>
            <div className="error-content">
                <h4>Oops!</h4>
                <p>I’m currently in the process of redesigning (and developing) my site. My case studies and projects
                will be uploaded soon. In the meantime, check out my <a className="resume" href="https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            whileTap={{ scale: 0.97, }}
                            whileHover={{
                                color: "#ced2fa",
                                transition: { duration: 0.2 }
                            }} className="link-resume">resume
                                </motion.div>
                    </a>!
                </p>
                <Link to="/">
                    <motion.div className="home-button"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            backgroundColor: '#1C2225',
                            transition: { duration: 0.2 }
                        }}
                    >
                        Take me Home →
                    </motion.div>
                </Link>
            </div>
            <div className="spacer2"></div>
            <Footer />
        </div>
    )
};

export default Error;