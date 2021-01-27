import React from "react";
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js';
import ProjHeader from '../styledComponents/projHeader';
import ProjInfo from '../styledComponents/projInfo'
import Paragraph from '../styledComponents/projParagraph'
import NoTitleParagraph from '../styledComponents/projParagraph/notitle'
import IconParagraph from '../styledComponents/iconParagraph'
import Block from '../styledComponents/projParagraph/block'
import Number from '../styledComponents/projParagraph/number'
import Spacer from '../styledComponents/spacer'
import Image from '../styledComponents/projImage'
import BlockImage from '../styledComponents/projImage/blockImage'

import {
    ContentWrapper,
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
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/sprint.png"
                />
                <Spacer spacer="128px" />
                <Number
                    number="01"
                    title="Understand"
                    paragraph="As an important, foundational step, I asked some critical questions to understand the problem thoroughly."
                />
                <Spacer spacer="32px" />
                <IconParagraph
                    icon="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/2e354c5a8331e2ec2e9cec8173dd9dc179770dff/src/icons/user.svg"
                    text="How might we allow students to connect and discover other students and mentors, become mentors, and satisfy the needs of both mentors and mentees?"
                />
                <Spacer spacer="16px" />
                <IconParagraph
                    icon="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/2e354c5a8331e2ec2e9cec8173dd9dc179770dff/src/icons/compass.svg"
                    text="How do current first-year students seek guidance? How do they connect with other students? How do they discover new opportunities?"
                />
                <Spacer spacer="32px" />
                <NoTitleParagraph
                    text="After forming a couple preliminary questions, I interviewed both first-year and non-first-year students and conducted a survey to collect both quantitative and qualitative data. This allowed me to generate user insights, personas, and better empathize with fellow students. I asked two first-year students questions revolving around these topics:"
                />
                <Spacer spacer="32px" />
                <IconParagraph
                    icon="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/2e354c5a8331e2ec2e9cec8173dd9dc179770dff/src/icons/question.svg"
                    text="As a first year student, how easy do you think it is to gain advice and or reach out for help regarding campus life, your studies, etc.?"
                />
                <Spacer spacer="16px" />
                <IconParagraph
                    icon="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/2e354c5a8331e2ec2e9cec8173dd9dc179770dff/src/icons/question.svg"
                    text="If you do want advice or mentorship, who do you contact and how? How is that experience?"
                />
                <Spacer spacer="64px" />
                <Block
                    title="The Responses"
                    paragraph="It was mediocre, I was able to get some help from RA's, but not to the extent I would prefer."
                    paragraph2="This design exercise is my take on the problem mentioned above. It was completed over a seven-day design sprint in response to Google’s UX internship design challenge."
                />
                <Block
                    paragraph="It was mediocre, I was able to get some help from RA's, but not to the extent I would prefer."
                    paragraph2="This design exercise is my take on the problem mentioned above. It was completed over a seven-day design sprint in response to Google’s UX internship design challenge."
                />
                <Spacer spacer="128px" />
                <Number
                    number="03 - 04"
                    title="Sketch/decide"
                    paragraph="These phases utilized the research and personas from the previous stages to begin my ideations in low-fidelity sketch form and create a user flow to understand better what a student might see when using the app."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Integrations"
                    text="I wanted to create an application that was a place of familiarity. My university is apart of the G Suite system, so integrating things such as Google Calendar was important."
                />
                <Spacer spacer="64px" />
                <Image image="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/gsuite.png" />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Initial sketches and flow"
                    text="After thinking of integrations such as Google Calendar, I began with low-fidelity sketches to begin my ideation process."
                />
                <Spacer spacer="64px" />
                <Image image="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/sketches1.png" />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Further iterations"
                    text="After thinking of integrations such as Google Calendar, I began with low-fidelity sketches to begin my ideation process."
                />
                <Spacer spacer="64px" />
                <Image image="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/sketches2.png" />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Validating the iterations"
                    text="Not only did these iterations allow me to create more refined, user-experience-oriented designs, but it allowed me to gain a better grasp of what the overall direction and mission of this application was going to be. What screens could I consolidate into one? Which interfaces could be adjusted to remove unnecessary information? I was able to view the experience as a map instead of a linear timeline. My ideation was dramatically shifted thanks to these small roadblocks and changes."
                />
                <Spacer spacer="128px" />
            </ContentWrapper>
            <Footer />
        </>
    );
};

export default Google;