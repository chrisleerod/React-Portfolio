import React from "react";
import './homepage.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import PD from '../components/images/pd.jpg';
import ArrowRight from '../icons/arrow-right.svg';

import { Grid } from './grid';

export const Homepage = () => {
    return (
        <div className="wrapper">
            <div className="top-container">
                <div className="top">
                    <div className="header-container">
                        <motion.h1
                        initial={{ y: 140 }}
                        animate={{ y: 0 }}
                        transition={{ duration: .7 }}
                        >
                            Product designer. Front-end engineer. Student.
                        </motion.h1>
                    </div>
                    <p className="intro-p">
                        Hi, I'm Chris –– a <span style={{ fontStyle: "italic", fontWeight: "600" }}>product designer</span>,
                        <span style={{ fontStyle: "italic", fontWeight: "600" }}> front-end engineer</span>,
                        and <span style={{ fontStyle: "italic", fontWeight: "600" }}>student</span> based in Nashville, TN.
                        I am passionate about creating design solutions for software and applications.
                        <br></br>
                        <br></br>
                        Currently looking for 2021 new grad & internship opportunities.
                    </p>
                    <Link className="about-button-container" to="/about">
                        <motion.div
                            whileTap={{ scale: 0.97, }}
                            whileHover={{
                                backgroundColor: "#2C2E37",
                                transition: { duration: 0.2 }
                            }}
                            className="about-button">
                            <p>Why I chose product design →</p>
                        </motion.div>
                    </Link>
                </div>
            </div>
            <div className="content">
                <h2>Selected Work</h2>
                <Grid />
            </div>
        </div>
    );
};
