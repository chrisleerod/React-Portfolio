import React from "react";
import { motion } from "framer-motion";

import {
    ButtonWrapper,
} from './index.style';

const Button = ({ link, buttonText }) => {
    return (
        <ButtonWrapper>
            <a target="_blank" rel="noopener noreferrer" href={link}>
                <motion.div className="home-button"
                    style={{ backgroundColor: "#646E9F", border: "1px solid #828FFF" }}
                    whileTap={{ scale: 0.97, }}
                    whileHover={{
                        backgroundColor: '#5F68B9',
                        transition: { duration: 0.2 }
                    }}
                >
                    <p style={{ color: "#F2F2F2", fontWeight: "bold", fontSize: "14px" }}>{buttonText} ↗</p>
                </motion.div>
            </a>
        </ButtonWrapper>
    );
};

export default Button;