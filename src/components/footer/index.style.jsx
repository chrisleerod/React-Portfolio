import styled from 'styled-components'
import { motion } from "framer-motion";

export const FooterWrapper = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-bottom: 128px;
    max-width: 1144px;
    padding: 0 32px;
    width: 100%;
    @media only screen and (max-width: 500px) {
        padding: 0 24px;
        margin-bottom: 64px;
    }
`;

export const Left = styled(motion.div)`
    margin-bottom: 64px;
    margin-right: 32px;
    @media only screen and (max-width: 500px) {
        margin-right: 0px;
    }
`;

export const Right = styled(motion.div)`
    text-decoration: none;
    color: #F2F2F2;
    a {
        text-decoration: none;
        color: #F2F2F2;
    }
`;

export const FooterText = styled(motion.p)`
    color: #F2F2F2;
    opacity: 0.9;
    margin-top: 16px;
`;