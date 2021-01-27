import React from "react";

import {
    Paragraph,
    Block,
    Header
} from '../index.style';

const Responses = () => {
    return (
        <Paragraph>
            <Header>
                <h4>The responses</h4>
            </Header>
            <Block>
                <p>"It was mediocre, I was able to get some help from RA's, but not to the extent I would prefer.”
                    <br />
                    <br />
                    "I honestly wouldn’t know, I would maybe go to the office of student life.”
                    <br />
                    <br />
                    <span style={{ fontSize: "14px" }}>- Spencer Jolie, first year student</span>
                </p>
            </Block>
            <Block style={{marginTop: "16px"}}>
                <p>"I believe that it is a somewhat difficult task because my classes are with people in my year and they are just as lost as I am.”
                    <br />
                    <br />
                    "I've been able to connect with some upperclassmen who have really helped me out by joining BUDS, (Belmont University Developer’s Society) but I wish there was an easier way to connect with upperclassmen.”
                    <br />
                    <br />
                    <span style={{ fontSize: "14px" }}>- Peter Vu, first year student</span>
                </p>
            </Block>
        </Paragraph>
    );
};

export default Responses;