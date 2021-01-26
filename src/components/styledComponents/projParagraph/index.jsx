import React from "react";

import {
    Paragraph,
    Header
} from './index.style';

const ProjParagraph = ({ title, text }) => {
    return (
        <Paragraph>
            <Header>
                <h4>{title}</h4>
            </Header>
            <p>{text}</p>
        </Paragraph>
    );
};

export default ProjParagraph;