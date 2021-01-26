import React from "react";

import {
    Paragraph,
    Block,
} from './index.style';

const IconBlock = ({ title, text }) => {
    return (
        <Block>
            <Icon>
                
            </Icon>
            <p>{text}</p>
        </Block>
    );
};

export default IconBlock;