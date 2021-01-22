import React from "react";
import { motion } from "framer-motion";

import {
  CardWrapper,
  ImgWrapper,
  ContentWrapper,
  Header,
  Title,
  Description,
  Footer
} from './index.style';

const CardProj = ({ tag, year, title, description, views }) => {
    return (
      <CardWrapper>
        <ImgWrapper/>
        <ContentWrapper>
          <Header>
            <p>{tag}</p>
            <p>{year}</p>
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
  