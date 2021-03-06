import React from "react";
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/index.jsx';
import ProjHeader from '../styledComponents/projHeader';
import ProjInfo from '../styledComponents/projInfo';
import Paragraph from '../styledComponents/projParagraph';
import NoTitleParagraph from '../styledComponents/projParagraph/notitle';
import Button from '../styledComponents/button';
import IconParagraph from '../styledComponents/iconParagraph';
import Responses from '../styledComponents/projParagraph/quoteBlock';
import Research from '../styledComponents/projParagraph/list';
import Block from '../styledComponents/projParagraph/block';
import LargeBlock from '../styledComponents/projParagraph/bigBlock';
import SpecialBlock from '../styledComponents/projParagraph/specialBlock';
import PersonaCard from '../styledComponents/personaCard';
import Number from '../styledComponents/projParagraph/number';
import Spacer from '../styledComponents/spacer';
import Image from '../styledComponents/projImage';
import BlockImage from '../styledComponents/projImage/blockImage';

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
                <Spacer spacer="16px" />
                <Button
                    link="https://docs.google.com/presentation/d/11LabDODmaJgH7l2qcoFkZ_HsRcJu1xvPhqiUe7Z2wFA/edit?usp=sharing"
                    buttonText="View Slide Deck"
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
                <Spacer spacer="16px" />
                <Button
                    link="https://projects.invisionapp.com/prototype/cka52rx83004mo10113wo7mpb/play"
                    buttonText="View Final Prototype"
                />
                <Spacer spacer="128px" />
                <div style={{ margin: "0 auto", textAlign: "center" }}>
                    <video src={"https://chrisleerod-portfolio.s3.amazonaws.com/Videos/prototype.mp4"} playsInline autoPlay autoBuffer muted loop style={{ width: "100%", maxWidth: "765px", height: "100%", maxHeight: "600px" }} />
                </div>
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
                <Spacer spacer="64px" />
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
                <Responses />
                <Spacer spacer="64px" />
                <Research />
                <Spacer spacer="128px" />
                <Number
                    number="02"
                    title="Define"
                    paragraph="This phase utlized the research from the previous phase to better understand the audience and create user insights to form personas. Most importantly, it would allow me to better cover the evident issues and focus on what is most important."
                />
                <Spacer spacer="32px" />
                <LargeBlock />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Creating personas"
                    text="Once there was a clear hierarchy of the problems at hand, I began creating personas to give myself a clearer view of who I was designing this application for. I wanted to keep in mind that there were students at different levels of experience, and some new students aren’t freshman. They can also be transfer students. So moving forward, I created three personas: The Freshman, The Transfer Student, and The Experienced Senior."
                />
                <Spacer spacer="32px" />
                <PersonaCard
                    background="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                    title="FIRST-YEAR STUDENT"
                    name="Emir Aldred"
                    text="Emir is a first-semester student excited about college but doesn’t know where to start. He likes the idea of joining a club but is a little timid, nor does he know where he can find someone who he can talk to about this."
                />
                <Spacer spacer="16px" />
                <PersonaCard
                    background="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                    title="SECOND-YEAR TRANSFER STUDENT"
                    name="Angela Donaldson"
                    text="Angela is a second-year transfer student who has the ropes of college, but could use some help navigating the campus and getting to know the event system a little better.
                    "
                />
                <Spacer spacer="16px" />
                <PersonaCard
                    background="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                    title="FOURTH-YEAR STUDENT"
                    name="Andrew Wu"
                    text="Andrew is a high-achieving fourth-year student who loves volunteering in the community. He wants to add a couple things to his resume that demonstrates his leadership qualities, but doesn’t really know where he could start."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Considering the experienced students"
                    text="One group of students that would help the process of helping new students would be experienced students. How would they become mentors? I wanted to create a process that offered both reward and opportunity for good students; however, I did not want to make it exclusive. I considered a GPA threshold of 3.0 would grant experienced students access to become a mentor automatically. If a student did not meet these requirements, he or she could apply on campus and be interviewed."
                />
                <Spacer spacer="32px" />
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
                <Number
                    number="05 - 06"
                    title="Prototype/validate"
                    paragraph="After finalizing the wireframe and sketches, I then moved onto mid-fidelity designs and prototyping while using Material UI as a framework. This expedited the design process which allowed for more thoughtful decisions. I created a prototype via InVision Studio."
                />
                <Spacer spacer="16px" />
                <Button
                    link="https://projects.invisionapp.com/prototype/Google-Low-Fi-cka090fgq0016e801jm1vvnn7/play/d85390bd"
                    buttonText="View Lofi Prototype"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/lofi1.png"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/lofi2.png"
                />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Conducting user testing"
                    text="After designing and creating a functional prototype in InVision Studio, I conducted some user tests with three users. No context of the design was given prior to testing. The goal was to hear from unbiased users and how they felt about the functionality and experience as a whole."
                />
                <Spacer spacer="32px" />
                <SpecialBlock />
                <Spacer spacer="32px" />
                <Paragraph
                    title="What did user testing accomplish?"
                    text="Getting user opinions and testing data proved to show some weaknesses in the initial designs. I went back and reiterated the designs to strengthen the user's experience. For example, a clear problem was the navigation to view both potential and current connections. The initial designs I came up with did not allow the user to easily navigate between the two options."
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/drawer1.png"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/drawer2.png"
                />
                <Spacer spacer="128px" />
                <Paragraph
                    title="Final solutions"
                    text="Wrapping up the sprint, I further iterated and created a high-fidelity prototype featuring in-depth animations to present to Google."
                />
                <Spacer spacer="16px" />
                <Button
                    link="https://projects.invisionapp.com/prototype/cka52rx83004mo10113wo7mpb/play"
                    buttonText="View Final Prototype"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/hifi1.png"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/hifi2.png"
                />
                <Spacer spacer="64px" />
                <BlockImage
                    blockimage="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/hifi3.png"
                />
                <Spacer spacer="64px" />
                <Paragraph
                    title="Reflection"
                    text="Overall, I had an absolutely amazing time working on this project. I learned a ton about the Google Venture design process and it also allowed me to think critically to fit my design solutions in just a six-day period. Overall, I would have liked to validate my designs further with more user testing with the high-fidelity prototypes, but was not able to due to time constraints."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="What's next"
                    text="Before finalizing the product, I'd begin user testing to either validate the final designs or call for further iterations."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="What I learned"
                    text="I learned a ton about design sprints - specifically the Google Venture design methodology. This project also taught me how to condense my workflow to meet a tight deadline. I also learned how to effectively use qualitative and quantitative data to pinpoint problems and guide myself towards design solutions."
                />
                <Spacer spacer="32px" />
                <Paragraph
                    title="Thank you"
                    text="If you've scrolled this far, thank you for taking your time to read a little about my design decisions and solutions in response to the prompt. If you'd like to talk more about the project, please reach out!"
                />
                <Spacer spacer="128px" />
            </ContentWrapper>
            <Footer />
        </>
    );
};

export default Google;