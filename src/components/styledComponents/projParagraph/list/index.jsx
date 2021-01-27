import React from "react";

import {
    Paragraph,
    Header,
    List
} from './index.style';

const Research = () => {
    return (
        <Paragraph>
            <Header>
                <h4>Research results</h4>
            </Header>
            <List style={{marginLeft: "16px"}}>
                <ul>
                    <li><p>100% of the first-year respondents felt that they would at least somewhat like to gain advice from other, more experienced students.</p></li>
                    <br/>
                    <li><p>100% of the non-first-year respondents felt that they would have benefited from mentorship when they were freshman students.</p></li>
                    <br/>
                    <li><p>77% of the non-first-year respondents expressed some interest in volunteering to guide first-year students.</p></li>
                    <br/>
                    <li><p>97% of respondents said they had at least some interest in using an application that provides a community-like platform for guidance and</p></li>
                </ul>
            </List>
        </Paragraph>
    );
};

export default Research;