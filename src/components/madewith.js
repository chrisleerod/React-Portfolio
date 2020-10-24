import React from "react";
import { motion } from "framer-motion";
import './madewith.css';

export const Paragraphs = () => {
    return (
        <div className="built-wrapper">
            <div className="built-title">
                Built with
            </div>
            <div className="built-with">
                <div className="built-container">
                    <motion.a target="_blank" href="https://figma.com" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            backgroundColor: "rgba(242, 242, 242, 0.6)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        Figma ↗︎
                </motion.a>
                    <div className="info">
                        Where the design magic happens –– my favorite design tool!
                </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://rsms.me/inter" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            backgroundColor: "rgba(242, 242, 242, 0.6)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        Inter ↗︎
                </motion.a>
                    <div className="info">
                        A beautiful typeface designed by Rasmus Andersson. This has replaced Roboto as my go-to font.
                </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://reactjs.org" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            backgroundColor: "rgba(242, 242, 242, 0.6)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        React.js ↗︎
                </motion.a>
                    <div className="info">
                        My favorite! Sorry to all the Angular and Vue people out there.
                </div>
                </div>
                <div className="built-container">
                    <motion.a target="_blank" href="https://framer.com/motion" className="built-link"
                        whileTap={{ scale: 0.97, }}
                        whileHover={{
                            backgroundColor: "rgba(242, 242, 242, 0.6)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        Framer Motion ↗︎
                </motion.a>
                    <div className="info">
                        A motion library created for React to implement beautiful and powerful animations.
                </div>
                </div>
            </div>
        </div>
    )
};