import React, { Component } from "react";
import './freelance.css';
import { motion } from "framer-motion";

import ProjCard from '../styledComponents/projCard';
import Navbar from '../navbar/navbar.js';

class freelance extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <motion.div className="freelance-wrapper"
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
                        delay: 0.1,
                        ease: [.19, 1, .22, 1],
                        duration: 2,
                    }}
                >
                    <motion.div className="freelance-header"
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
                            delay: 0.1,
                            ease: [.19, 1, .22, 1],
                            duration: 2,
                        }}
                    >
                        <h2>Freelance projects</h2>
                        <p>Below will be selected work primarily showcasing my marketing animation projects completed through my freelance agency, imagecrate.</p>
                    </motion.div>
                    <motion.div className="freelance-grid"
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
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PrismAIO/status/1291131868608376832?s=20">
                            <motion.div
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
                                    background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/prism.png"
                                    tag="MOTION"
                                    year="2020"
                                    title="Prism 2.0"
                                    description="I teamed up with Prism’s team to unveil their 2.0 software update by creating a marketing animation showing the new features."
                                    views="118k+ views"
                                />
                            </motion.div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Cybersole/status/1138914695144968193?s=20">
                            <motion.div
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
                                    background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/cybersole.png"
                                    tag="MOTION"
                                    year="2019"
                                    title="Cybersole 4.0"
                                    description="Cybersole’s team reached out to me to complete an animation that completely changed the sneaker software space."
                                    views="582k+ views"
                                />
                            </motion.div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/KodaiAIO/status/1187082493968543744?s=20">
                            <motion.div
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
                                    background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/kodai.png"
                                    tag="MOTION"
                                    year="2019"
                                    title="Kodai Dashboard"
                                    description="I teamed up with the Kodai team to demonstrate their new companion web-dashboard and its extensive features."
                                    views="103k+ views"
                                />
                            </motion.div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/soleaio/status/1322312448154738690?s=20">
                            <motion.div
                                initial={{ backgroundColor: '#191E21', borderRadius: 8, }}
                                whileTap={{ scale: 0.995, }}
                                whileHover={{
                                    backgroundColor: '#1C2225',
                                    translateY: -5,
                                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <ProjCard
                                    background="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/sole.png"
                                    tag="MOTION"
                                    year="2020"
                                    title="Sole AIO 1.0"
                                    description="SoleAIO’s team reached out to me to create a marketing animation going over their software’s new features."
                                    views="55k+ views"
                                />
                            </motion.div>
                        </a>
                    </motion.div>
                    <div className="spacer2"></div>
                </motion.div >
            </div>
        );
    }
}

export default freelance;