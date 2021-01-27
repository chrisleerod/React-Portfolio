import React from "react";

import {
    Paragraph,
} from '../index.style';

const NoTitleParagraph = ({ text }) => {
    return (
        <Paragraph>
            <p>{text}</p>
        </Paragraph>
    );
};

export default NoTitleParagraph;