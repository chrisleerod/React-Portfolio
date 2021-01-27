import React from "react";

import {
    Paragraph,
    ParagraphSection,
    BigBlock
} from '../index.style';

const LargeBlock = () => {
    return (
        <Paragraph>
            <BigBlock>
                <ParagraphSection>
                    <h5>There is an evident problem</h5>
                    <p style={{ marginTop: "16px" }}>The average student feels as though gaining useful advice, and mentorship is something that should be easier.</p>
                </ParagraphSection>
                <ParagraphSection style={{ marginTop: "32px" }}>
                    <h5>Not much has changed</h5>
                    <p style={{ marginTop: "16px" }}>Speaking to both first-year and non-first-year students confirmed that 3+ years difference hadn’t changed the process much. The problem is something that most students experience.</p>
                </ParagraphSection>
                <ParagraphSection style={{ marginTop: "32px" }}>
                    <h5>There is interest in volunteering</h5>
                    <p style={{ marginTop: "16px" }}>The responses from the non-first-year students give a promising outlook for having enough mentors to guide first-year and transfer students.</p>
                </ParagraphSection>
            </BigBlock>
        </Paragraph>
    );
};

export default LargeBlock;