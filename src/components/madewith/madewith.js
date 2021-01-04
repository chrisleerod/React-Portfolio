import React from "react";
import { motion } from "framer-motion";
import './madewith.css';

export const Paragraphs = () => {
    return (
        <div className="built-wrapper">
            <h4 className="built-title">
                Built with
            </h4>
            <div className="built-with">
                <div className="built-container">
                    <motion.a target="_blank" href="https://figma.com" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            color: "#ced2fa",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p>Figma ↗</p>
                    </motion.a>
                    <div className="info">
                        <p>Where the design magic happens –– my favorite design tool!</p>
                    </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://rsms.me/inter" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            color: "#ced2fa",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p>Inter ↗</p>
                    </motion.a>
                    <div className="info">
                        <p>A beautiful typeface designed by Rasmus Andersson. This has replaced Roboto as my go-to font.</p>
                    </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://reactjs.org" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            color: "#ced2fa",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p>React.js ↗</p>
                    </motion.a>
                    <div className="info">
                        <p>My favorite! Sorry to all the Angular and Vue people out there.</p>
                    </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://framer.com/motion" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            color: "#ced2fa",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <p>Framer Motion ↗</p>
                    </motion.a>
                    <div className="info">
                        <p>A motion library created for React to implement beautiful and powerful animations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};