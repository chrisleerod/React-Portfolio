import React from "react";

import {
    PersonaWrapper,
    Person,
    Paragraph,
    TopTitle,
    Name,
    ContentWrapper
} from './index.style';

const PersonaCard = ({ text, background, title, name }) => {
    return (
        <PersonaWrapper>
            <Person style={{backgroundImage: `url(${background})`}} />
            <ContentWrapper>
                <TopTitle>
                    {title}
                </TopTitle>
                <Name>
                    {name}
                </Name>
                <Paragraph>
                    {text}
                </Paragraph>
            </ContentWrapper>
        </PersonaWrapper>
    );
};

export default PersonaCard;