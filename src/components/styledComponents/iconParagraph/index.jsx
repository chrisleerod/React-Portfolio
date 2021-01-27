import React from "react";

import {
    IconParagraphWrapper,
    Icon,
    Paragraph
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