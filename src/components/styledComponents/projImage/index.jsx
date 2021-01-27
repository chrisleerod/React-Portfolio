import React from "react";

import {
    RegularImage,
} from './index.style';

const Image = ({ image }) => {
    return (
        <RegularImage src={image} />
    );
};

export default Image;