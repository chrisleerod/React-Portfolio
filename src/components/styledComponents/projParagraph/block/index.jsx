import React from "react";

import {
    Paragraph,
    Block,
    Paragraph2,
    Header
} from '../index.style';

const Special = ({ title, paragraph, paragraph2 }) => {
    return (
        <Paragraph>
            <Header>
                <h4>{title}</h4>
            </Header>
            <Block>
                <p>{paragraph}</p>
                <Paragraph2>
                    <p>{paragraph2}</p>
                </Paragraph2>
            </Block>
        </Paragraph>
    );
};

export default Special;