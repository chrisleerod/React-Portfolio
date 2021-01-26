import React from "react";

import {
    HeaderWrapper,
    Title,
    Graphic,
  } from './index.style';

  const ProjHeader = ({ title, graphic}) => {
    return (
        <HeaderWrapper>
            <Title>
                {title}
            </Title>
            <Graphic graphic={graphic} />
        </HeaderWrapper>
    );
  };
  
  export default ProjHeader;
  