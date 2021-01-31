import React from "react";

import {
    ProjWrapper,
    ProjContentWrapper,
    Header,
    Title,
    ProjImg,
    ProjImgContainer
} from '../index.style';

const CardProj = ({ tag, year, title, color, views, image }) => {
    return (
        <ProjWrapper
            style={{
                backgroundColor: `url(${color})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <ProjContentWrapper>
                <Header
                    style={{zIndex: 1}}
                >
                    <p style={{letterSpacing: "0.05em"}}>{tag}</p>
                    <p>{year}</p>
                </Header>
                <Title style={{ marginTop: "auto", zIndex: 1 }} >
                    {title}
                </Title>
                <ProjImgContainer>
                    <ProjImg src="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/pd.jpg"
                    />
                </ProjImgContainer>
            </ProjContentWrapper>
        </ProjWrapper>
    );
};

export default CardProj;
