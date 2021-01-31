import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js';
import HomeCard from '../styledComponents/projCard/homeCard';
import ProjCard from '../styledComponents/projCard';

import { Paragraphs } from '../madewith/madewith';

import './homepage.css';

class homepage extends Component {
    render() {
        return (
            <>
                <div className="wrapper">
                    <Navbar />
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
                                <p>Hi, I'm Chris –– a <span style={{ fontWeight: "600" }}>product designer</span>,
                        <span style={{ fontWeight: "600" }}> front-end engineer</span>,
                        and <span style={{ fontWeight: "600" }}>student</span> based in Nashville, TN.
                        I am passionate about creating cohesive digital design experiences.</p>
                            </motion.p>
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
                        <motion.div className="homepage-grid"
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
                                delay: 0.2,
                                ease: [.19, 1, .22, 1],
                                duration: 2,
                            }}
                        >
                            <Link to={"/404"} className="item-1" rel="noopener noreferrer">
                                <motion.div
                                    style={{ flex: 1 }}
                                    initial={{ background: 'linear-gradient(90deg, rgba(194,95,176,1) 0%, rgba(151,10,247,1) 100%)', borderRadius: 8, }}
                                    whileTap={{ scale: 0.995, }}
                                    whileHover={{
                                        backgroundColor: '#1C2225',
                                        translateY: -5,
                                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <HomeCard
                                        image="https://raw.githubusercontent.com/chrisleerod/portfolio3/master/images/pd.jpg"
                                        tag="DESIGN / FRONT-END"
                                        year="2020 - 2021"
                                        title="Project Destroyer"
                                    />
                                </motion.div>
                            </Link>
                            <Link to={"/google"} rel="noopener noreferrer">
                                <motion.div
                                    style={{ flex: 1 }}
                                    initial={{ backgroundColor: '#191E21', borderRadius: 8, }}
                                    whileTap={{ scale: 0.995, }}
                                    whileHover={{
                                        backgroundColor: '#1C2225',
                                        translateY: -5,
                                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <ProjCard
                                        background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/googleproj.png"
                                        tag="PRODUCT DESIGN"
                                        year="2020"
                                        title="Google UX Challenge"
                                        description="My response to Google’s Summer 2020 internship application."
                                    />
                                </motion.div>
                            </Link>
                            <Link to={"/freelance"} rel="noopener noreferrer" href="https://twitter.com/PrismAIO/status/1291131868608376832?s=20">
                                <motion.div
                                    style={{ flex: 1 }}
                                    initial={{ backgroundColor: '#191E21', borderRadius: 8, }}
                                    whileTap={{ scale: 0.995, }}
                                    whileHover={{
                                        backgroundColor: '#1C2225',
                                        translateY: -5,
                                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <ProjCard
                                        background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/imagecrate.png"
                                        tag="FREELANCE"
                                        year="2018 - PRESENT"
                                        title="imagecrate"
                                        description="My freelance design agency that I’ve worked with clients to product web, product, and other design projects."
                                    />
                                </motion.div>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <div className="built">
                        <Paragraphs />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default homepage;
