import React from "react";

import {
    InfoWrapper,
    Info,
    Title
} from './index.style';

const ProjInfo = ({ role, duration, tools }) => {
    return (
        <InfoWrapper>
            <Info>
                <Title>ROLE</Title>
                <p>{role}</p>
            </Info>
            <Info>
                <Title>DURATION</Title>
                <p>{duration}</p>
            </Info>
            <Info>
                <Title>TOOLS</Title>
                <p>{tools}</p>
            </Info>
        </InfoWrapper>
    );
};

export default ProjInfo;