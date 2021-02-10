import React from "react";

import {
    RegularImage,
    ImageContainer
} from './index.style';

const Image = ({ image }) => {
    return (
        <ImageContainer>
            <RegularImage src={image} />
        </ImageContainer>
    );
};

export default Image;