import React from "react";

import {
    ProjWrapper,
    ProjContentWrapper,
    Header,
    ProjTitle,
    ProjImg,
    ProjImgContainer,
    ProjDescription
} from '../index.style';

const CardProj = ({ description, title, color }) => {
    return (
        <ProjWrapper
            style={{
                backgroundColor: `url(${color})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <ProjContentWrapper>
                <ProjTitle style={{ zIndex: 1 }} >
                    Project Destroyer
                </ProjTitle>
                <ProjDescription style={{ zIndex: 1 }}>
                    Leading the design and front-end development of a new user experience for Destroyer Bots.
                </ProjDescription>
                <ProjImgContainer>
                    <ProjImg src=""
                    />
                </ProjImgContainer>
            </ProjContentWrapper>
        </ProjWrapper>
    );
};

export default CardProj;
