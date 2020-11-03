import React, { Component } from "react";
import './about.css';
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

class about extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="me-pic">
                    <img src="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/purple.jpg" alt="" />
                </div>
                <div className="me-card-container">
                    <div className="me-card">
                        <div className="picture">
                            <img src="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/memoji.png" alt="" />
                        </div>
                        <div className="text">
                            <div className="name">
                                Chris Rodriguez
                            </div>
                            <div className="info">
                                <p>
                                    Designer, developer, and student
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="title-text">About me</div>
                    <div className="body-text">
                        <p className="paragraph">
                            I’m Chris — a WCAG using product designer, developer, and
                            student attending Belmont University in Nashville, TN graduating May 2021. I started my
                            academic career as a Pre-Med student, but fast-forward a couple of years, and I found
                            my love for Computer Science and design.
                        </p>
                        <p className="paragraph">
                            I find joy working on complex design problems, coding, exercising, playing sports,
                            and hanging with friends and family.
                        </p>
                        <p className="paragraph">
                            I started my freelance design company back in February 2018. I have worked with
                            sneaker software companies that help their users purchase limited releases (think Supreme, Yeezy,
                            Jordans, etc.) to create marketing animations, web/product design projects, and other cool
                            stuff. One of my marketing animations has over 180,000,000 interactions on Twitter. Check that business out <a className="here" href="https://twitter.com/imagecrate" target="_blank">here →</a>.
                        </p>
                    </div>
                </div>
                <div className="section">
                    <div className="title-text">Why product design?</div>
                    <div className="body-text">
                        <p className="paragraph">
                            Technology is ever-evolving, and never stagnant. It’s better than it
                            was yesterday, but will always have room for improvement. New features, frameworks,
                            libraries, and products come out everyday. Long story short, I love learning.
                        </p>
                    </div>
                </div>
                <div className="section">
                    <div className="title-text">Get in touch</div>
                    <div className="link-container">
                        <a href="mailto:chrisleerod@gmail.com">
                            <motion.div
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    backgroundColor: "rgba(242, 242, 242, 0.6)",
                                    transition: { duration: 0.2 }
                                }} className="link">
                                <p>Email ↗︎</p>
                            </motion.div>
                        </a>
                        <a target="_blank" href="https://linkedin.com/in/chrisleerod">
                            <motion.div
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    backgroundColor: "rgba(242, 242, 242, 0.6)",
                                    transition: { duration: 0.2 }
                                }} className="link">
                                <p>LinkedIn ↗︎</p>
                            </motion.div>
                        </a>
                        <a target="_blank" href="https://calendly.com/chrisleerod">
                            <motion.div
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    backgroundColor: "rgba(242, 242, 242, 0.6)",
                                    transition: { duration: 0.2 }
                                }} className="link">
                                <p>Calendly ↗︎</p>
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;