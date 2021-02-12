import React from "react";
import Copy from './copy';

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
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1aXlgDU4Z2KY_8nh4HK91mrrIH8Dhj6xc/view">
                    <p>Resume</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" style={{margin: '0px 32px'}} href="https://github.com/chrisleerod">
                   <p>GitHub</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/chrisleerod">
                    <p>LinkedIn</p>
                </a>
            </Right>
        </FooterWrapper>
    );
};

export default Footer;