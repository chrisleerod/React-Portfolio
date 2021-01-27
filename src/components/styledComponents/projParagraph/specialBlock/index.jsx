import React from "react";

import {
    Paragraph,
    Block,
    Header
} from '../index.style';

const SpecialBlock = () => {
    return (
        <Paragraph>
            <Header>
                <h4>User feedback</h4>
            </Header>
            <Block>
                <p>“I think there should be an RSVP button on each event on the home screen. If a person already knows about the club, it should be a quick and easy process to RSVP.”</p>
            </Block>
            <Block style={{marginTop: "16px"}}>
                <p>“How do you find potential connections and your current connections?”</p>
            </Block>
            <Block style={{marginTop: "16px"}}>
                <p>“I like how the connections going to an event is shown. This can boost attendance, but I think you can increase the sizes of the pictures.”</p>
            </Block>
        </Paragraph>
    );
};

export default SpecialBlock;