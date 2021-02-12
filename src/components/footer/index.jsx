import React from "react";
import Copy from './copy';
import { motion } from "framer-motion";

import {
    FooterWrapper,
    Left,
    Right,
    FooterText
} from './index.style';

const Footer = () => {
    return (
        <FooterWrapper>
            <Left>
                <Copy />
                <FooterText>
                    Designed and coded over many late nights.
                </FooterText>
            </Left>
            <Right>
                <motion.a target="_blank" rel="noopener noreferrer" style={{ marginRight: '64px' }} href="https://github.com/chrisleerod"
                    initial={{ opacity: 1, }}
                    whileTap={{ scale: 0.97, }}
                    whileHover={{
                        opacity: 0.9,
                        transition: { duration: 0.2 }
                    }}
                >
                    <p>GitHub</p>
                </motion.a>
                <motion.a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/chrisleerod"
                    initial={{ opacity: 1, }}
                    whileTap={{ scale: 0.97, }}
                    whileHover={{
                        opacity: 0.9,
                        transition: { duration: 0.2 }
                    }}
                >
                    <p>LinkedIn</p>
                </motion.a>
            </Right>
        </FooterWrapper>
    );
};

export default Footer;