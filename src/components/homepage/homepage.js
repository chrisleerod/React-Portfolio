import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


import { Grid } from '../grid/grid';
import { Paragraphs } from '../madewith/madewith';

import './homepage.css';

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
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    transition={{
                                        delay: 0.1,
                                        ease: [.19, 1, .22, 1],
                                        duration: 2,
                                    }}
                                >
                                    Product{' '}
                                </motion.h1>
                            </div>
                            <div className="header">
                                <motion.h1
                                    initial={{
                                        y: 100,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    transition={{
                                        delay: 0.2,
                                        ease: [.19, 1, .22, 1],
                                        duration: 2,
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
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    transition={{
                                        delay: 0.3,
                                        ease: [.19, 1, .22, 1],
                                        duration: 2,
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
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        ease: [.19, 1, .22, 1],
                                        duration: 2,
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
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        skewY: 0
                                    }}
                                    transition={{
                                        delay: 0.5,
                                        ease: [.19, 1, .22, 1],
                                        duration: 2,
                                    }}
                                // transition={{ duration: .6,
                                // delay: 0.26
                                // }}
                                >
                                    Student.
                            </motion.h1>
                            </div>
                        </div>
                        <motion.p className="intro-p"
                            initial={{
                                y: 50,
                                opacity: 0,
                                skewY: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                skewY: 0
                            }}
                            transition={{
                                delay: 0.8,
                                ease: [.19, 1, .22, 1],
                                duration: 2,
                            }}
                        >
                            Hi, I'm Chris –– a <span style={{ fontStyle: "italic", fontWeight: "600" }}>product designer</span>,
                        <span style={{ fontStyle: "italic", fontWeight: "600" }}> front-end engineer</span>,
                        and <span style={{ fontStyle: "italic", fontWeight: "600" }}>student</span> based in Nashville, TN.
                        I am passionate about creating cohesive digital design solutions.
                        <br></br>
                            <br></br>
                        Currently looking for 2021 new grad & internship opportunities.
                    </motion.p>
                        <Link className="about-button-container" to="/about">
                            <motion.div
                                initial={{
                                    y: 50,
                                    opacity: 0,
                                    skewY: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.9,
                                    ease: [.19, 1, .22, 1],
                                    duration: 2,
                                }}
                                className="button-container">
                                <motion.div
                                    whileTap={{ scale: 0.97, }}
                                    whileHover={{
                                        color: "#ced2fa",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="about-button">
                                    <p>Why I chose product design →</p>
                                </motion.div>
                            </motion.div>
                        </Link>
                    </div>
                </div>
                <motion.div className="content"
                    initial={{
                        y: 100,
                        opacity: 0,
                        skewY: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        skewY: 0
                    }}
                    transition={{
                        delay: 1,
                        ease: [.19, 1, .22, 1],
                        duration: 2,
                    }}
                >
                    <h4>Selected Work</h4>
                    <Grid />
                </motion.div>
                <div className="built">
                    <Paragraphs />
                </div>
            </div>
        );
    }
}

export default homepage;
