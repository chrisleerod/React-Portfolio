import React from "react";

import {
    Paragraph,
    Block,
} from '../index.style';

const BlockNoTitle = ({ paragraph }) => {
    return (
        <Paragraph>
            <Block>
                <p>{paragraph}</p>
            </Block>
        </Paragraph>
    );
};

export default BlockNoTitle;