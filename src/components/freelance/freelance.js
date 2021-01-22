import React, { Component } from "react";
import './freelance.css';
import { motion } from "framer-motion";

import ProjCard from '../styledComponents/projCard';

class freelance extends Component {
    render() {
        return (
            <div className="freelance-wrapper">
                <div className="freelance-title"></div>
                <div className="freelance-description"></div>
                <div className="freelance-grid">
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
                                tag="MOTION"
                                year="2020"
                                title="Prism 2.0"
                                description="I teamed up with Prism’s team to unveil their latest software update."
                                views="115k+ views"
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
                                tag="MOTION"
                                year="2020"
                                title="Kodai Dashboard"
                                description="I teamed up with the Kodai team to demonstrate their new companion web-dashboard."
                                views="115k+ views"
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
                                tag="MOTION"
                                year="2020"
                                title="Sole AIO 1.0"
                                description="SoleAIO’s team reached out to me to create a marketing animation going over their software’s new features."
                                views="55k+ views"
                            />
                        </motion.div>
                    </a>
                </div>
                <div className="spacer2"></div>
            </div >
        );
    }
}

export default freelance;