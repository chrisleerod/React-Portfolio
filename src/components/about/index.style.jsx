import styled from 'styled-components'
import { motion } from "framer-motion";

export const AboutWrapper = styled(motion.div)`
    padding: 0px 32px;
`;

export const Header = styled(motion.div)`\
    max-width: 1080px;
    margin: 0 auto;
    margin-top: 128px;
    margin-bottom: 64px;
    h2 {
        margin-bottom: 16px;
    }
    p {
        opacity: 0.9;
        margin-bottom: 32px;
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
    max-width: 1080px;
`;

export const Row = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 64px;
`;

export const LastRow = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 128px;
`;

export const SideContainer = styled.div`
    p {
        opacity: 0.9;
        margin-top: 8px;
    }
`;

export const SideTitle = styled(motion.h5)`
    width: 100%;
    min-width: 378px;
    font-weight: 500;
    margin-right: 64px;
`;

export const Content = styled(motion.div)`
    max-width: 640px;
    width: 100%;
    p {
        line-height: 1.5em;
        opacity: 0.9;
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