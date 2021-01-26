import React from "react";
import { motion } from "framer-motion";

import {
    HeaderWrapper,
    Title,
    Graphic,
} from './index.style';

const ProjHeader = ({ title, graphic }) => {
    return (
        <HeaderWrapper>
            <motion.div
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
                <Title>
                    {title}
                </Title>
            </motion.div>
            <motion.div style={{display: "inline-flex"}}
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
                <Graphic src={graphic} />
            </motion.div>
        </HeaderWrapper>
    );
};

export default ProjHeader;
