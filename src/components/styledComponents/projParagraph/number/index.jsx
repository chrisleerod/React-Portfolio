import React from "react";

import {
    Paragraph,
    Number,
    Header
} from '../index.style';

const Special = ({ title, number, paragraph }) => {
    return (
        <Paragraph>
            <Header>
                <Number>
                    {number}
                </Number>
                <h4>{title}</h4>
            </Header>
                <p>{paragraph}</p>
        </Paragraph>
    );
};

export default Special;