import React from "react";

import {
    Title,
    
  } from './index.style';

  const IconParagraph = ({ text, icon }) => {
    return (
        <IconParagraphWrapper>
            <Icon src={icon} />
            <Paragraph>
                {text}
            </Paragraph>
        </IconParagraphWrapper>
    );
};

export default IconParagraph;