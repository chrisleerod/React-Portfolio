import React from "react";
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js';
import ProjHeader from '../styledComponents/projHeader';
import ProjInfo from '../styledComponents/projInfo'
import Paragraph from '../styledComponents/projParagraph'
import Block from '../styledComponents/projParagraph/block'
import Number from '../styledComponents/projParagraph/number'
import Spacer from '../styledComponents/spacer'

import {
    ContentWrapper,
    MaxWidth
} from './index.style';

const Google = () => {
    return (
        <>
            <Navbar />
            <ProjHeader
                title="Google UX Challenge"
                graphic="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/google-phones.png"
            />
            <Spacer spacer="32px" />
            <ContentWrapper>
                <ProjInfo
                    role="Product Designer"
                    duration="February 12-19, 2020"
                    tools="Sketch, InVision Studio, and Photoshop"
                />
                <Spacer spacer="64px" />
                <Block
                    title="Brief"
                    paragraph="Getting questions answered related to classes, majors, guidance, advice, and other like-minded topics should not be a difficult process. This can be solved by promoting community-oriented interactions between students."
                    paragraph2="This design exercise is my take on the problem mentioned above. It was completed over a seven-day design sprint in response to Google’s UX internship design challenge."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Outcome"
                    text="I'm happy to say I passed the design challenge and was moved to project matching! 🎉 However, the Google UX internship for Summer 2020 was canceled due to COVID-19. Either way, I am still very thankful I was able to participate in the challenge."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Solution"
                    text="My solution, “MentorU,” promotes campus community by providing a platform that hosts events, clubs, mentor connections, messaging, and calendar events. View the final prototype below."
                />
                <Spacer spacer="128px" />
                <Spacer spacer="128px" />
                <Paragraph
                    title="The prompt"
                    text="“Your school wants to strengthen the community by encouraging experienced students to connect with new students and help them adjust to campus life. Design an experience that allows mentors and mentees to discover each other. Consider the needs of both mentors and mentees, including how someone may become a mentor and how to connect mentors to mentees.”"
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Defining the sprint"
                    text="Given the short deadline, I decided to use Google Venture's Design sprint methodology as a general guideline. This helped me set goals and manage my time."
                />
                <Spacer spacer="128px" />
                <Spacer spacer="128px" />
                <Number 
                    number="01"
                    title="Understand"
                    paragraph="As an important, foundational step, I asked some critical questions to understand the problem thoroughly."
                />
                <Spacer spacer="32px"/>
            </ContentWrapper>
            <Footer />
        </>
    );
};

export default Google;