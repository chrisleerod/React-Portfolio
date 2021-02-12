import styled from 'styled-components'
import { motion } from "framer-motion";

export const EmailWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
`;

export const Email = styled(motion.p)`
    font-weight: 700;
    color: #f2f2f2;
`;

export const CopyButton = styled(motion.div)`
    padding: 8px 8px;
    display: flex;
    align-items: center;
    background-color: #131419;
    border: 1px solid #1C2225;
    margin-left: 16px;
    border-radius: 4px;
`;

export const CopyText = styled(motion.p)`
    font-size: 14px;
    color: #F2F2F2;
    font-weight: 700;
    margin-left: 8px;
    user-select: none;
    cursor: pointer;
`;