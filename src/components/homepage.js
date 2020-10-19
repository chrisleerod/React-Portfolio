import React, { Component } from "react";
import './homepage.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import PD from '../components/images/pd.jpg';
import ArrowRight from '../icons/arrow-right.svg';
import { Grid } from './grid';
import ScrollToTop from '../components/ScrollToTop';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

class homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="top-container">
                    <div className="top">
                        <div className="header-container">
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.075,
                                        ease: "circOut",
                                        duration: 1,
                                    }}
                                >
                                    Product{' '}
                                </motion.h1>
                            </div>
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.15,
                                        ease: "circOut",
                                        duration: 1,
                                    }}
                                // transition={{ duration: .6,
                                // delay: 0.14
                                // }}
                                >
                                    designer.{' '}
                                </motion.h1>
                            </div>
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.225,
                                        ease: "circOut",
                                        duration: 1,
                                    }}
                                // transition={{ duration: .6,
                                // delay: 0.18
                                // }}
                                >
                                    Front-end{' '}
                                </motion.h1>
                            </div>
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.3,
                                        ease: "circOut",
                                        duration: 1,
                                    }}
                                // transition={{ duration: .6,
                                // delay: 0.22
                                // }}
                                >
                                    engineer.{' '}
                                </motion.h1>
                            </div>
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        delay: 0.375,
                                        ease: "circOut",
                                        duration: 1,
                                    }}
                                // transition={{ duration: .6,
                                // delay: 0.26
                                // }}
                                >
                                    Student.
                            </motion.h1>
                            </div>
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
    }
}

export default homepage;
