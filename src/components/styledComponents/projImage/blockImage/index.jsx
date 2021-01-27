import React from "react";

import {
    BlockImageContainer,
    RegularImage,
} from '../index.style';

const BlockImage = ({ blockimage }) => {
    return (
        <BlockImageContainer>
            <RegularImage src={blockimage} />
        </BlockImageContainer>
    );
};

export default BlockImage;