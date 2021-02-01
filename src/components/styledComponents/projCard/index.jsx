import React from "react";

import {
  CardWrapper,
  ImgWrapper,
  ContentWrapper,
  Header,
  Title,
  Description,
  Footer
} from './index.style';

const CardProj = ({ tag, year, title, description, views, background }) => {
    return (
      <CardWrapper>
        <ImgWrapper
        style= {{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        />
        <ContentWrapper>
          <Header>
            <p style={{letterSpacing: "0.05em"}}>{tag}</p>
            <p style={{letterSpacing: "0.05em"}}>{year}</p>
          </Header>
          <Title>
            {title}
          </Title>
          <Description>
            {description}
          </Description>
          <Footer>
            <p>{views}</p>
          </Footer>
        </ContentWrapper>
      </CardWrapper>
    );
  };
  
  export default CardProj;
  