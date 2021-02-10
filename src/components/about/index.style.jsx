import styled from 'styled-components'
import { motion } from "framer-motion";

export const AboutWrapper = styled(motion.div)`
`;

export const Header = styled(motion.div)`
    padding: 0 32px;
    max-width: 1144px;
    margin: 0 auto;
    margin-top: 128px;
    margin-bottom: 64px;
    h2 {
        margin-bottom: 16px;
    }
    p {
        opacity: 0.9;
        margin-bottom: 32px;
        line-height: 1.5em;
    }
    @media only screen and (max-width: 500px) {
        margin-top: 64px;
        padding: 0 24px;
        h2 {
            font-size: 31.25px;
        }
    }
`;

export const Line = styled(motion.div)`
    width: 100%;
    height: 1px;
    background-color: #F2F2F2;
    opacity: 0.2;
`;

export const Links = styled(motion.div)`
    
`;

export const MotionLink = styled(motion.div)`
    text-decoration: none;
    color: #828fff;
    margin-right: 32px;
`;

export const BioLink = styled(motion.div)`
    text-decoration: none;
    color: #828fff;
`;

export const ContentContainer = styled(motion.div)`
    margin: 0 auto;
    margin-top: 64px;
    max-width: 1144px;
    padding: 0 32px;
    @media only screen and (max-width: 500px) {
        padding: 0 24px;
    }
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 64px;
    @media only screen and (max-width: 900px) {
    }
`;

export const LastRow = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 128px;
    @media only screen and (max-width: 900px) {
    }
`;

export const SideContainer = styled.div`
    p {
        opacity: 0.9;
        margin-top: 8px;
    }
    @media only screen and (max-width: 900px) {
    }
`;

export const SideTitle = styled(motion.h5)`
    width: 100%;
    min-width: 378px;
    font-weight: 500;
    padding-right: 64px;
    opacity: 0.9;
    @media only screen and (max-width: 900px) {
        min-width: 250px;
        padding-right: 32px;
    }
    @media only screen and (max-width: 750px) {
        display: none;
    }
`;

export const Content = styled(motion.div)`
    max-width: 640px;
    width: 100%;
    p {
        line-height: 1.5em;
        opacity: 0.9;
    }
    @media only screen and (max-width: 900px) {
        max-width: 100%;
    }
`;

export const BioPic = styled.img`
    width: 100%;
    border-radius: 8px;
    source: url('https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/purple.jpg');
`;

export const ParagraphTitle = styled.h4`
    max-width: 640px;
    width: 100%;
    margin-bottom: 16px;
`;