import React from "react";
import Navbar from '../navbar/navbar.js';
import Footer from '../footer/footer.js';

import {
    AboutWrapper,
    Header,
    Line,
    Links,
    MotionLink,
    BioLink,
    ContentContainer,
    Row,
    LastRow,
    BioPic,
    ParagraphTitle,
    Content,
    SideContainer,
    SideTitle,
} from './index.style';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutWrapper>
                <Header
                    initial={{
                        y: 50,
                        opacity: 0,
                        skewY: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        skewY: 0
                    }}
                    transition={{
                        delay: 0.1,
                        ease: [.19, 1, .22, 1],
                        duration: 2,
                    }}
                >
                    <h2>About me</h2>
                    <p>My attempt at summarizing my life and motivations into 1 page.</p>
                    <Links>
                        <a style={{ marginRight: '32px' }} href="mailto:chrisleerod@gmail.com">
                            <MotionLink
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    color: "#ced2fa",
                                    transition: { duration: 0.2 }
                                }} className="link">Email
                                </MotionLink>
                        </a>
                        <a style={{ marginRight: '32px' }} target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/chrisleerod">
                            <MotionLink
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    color: "#ced2fa",
                                    transition: { duration: 0.2 }
                                }} className="link">LinkedIn
                                </MotionLink>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrisleerod">
                            <MotionLink
                                whileTap={{ scale: 0.97, }}
                                whileHover={{
                                    color: "#ced2fa",
                                    transition: { duration: 0.2 }
                                }} className="link">GitHub
                                </MotionLink>
                        </a>
                    </Links>
                </Header>
                <Line
                    initial={{
                        y: 50,
                        opacity: 0,
                        skewY: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 0.2,
                        skewY: 0
                    }}
                    transition={{
                        delay: 0.2,
                        ease: [.19, 1, .22, 1],
                        duration: 2,
                    }}
                />
                <ContentContainer
                    initial={{
                        y: 50,
                        opacity: 0,
                        skewY: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        skewY: 0
                    }}
                    transition={{
                        delay: 0.3,
                        ease: [.19, 1, .22, 1],
                        duration: 2,
                    }}
                >
                    <Row>
                        <SideTitle>Student, developer, product designer, and entrepreneur</SideTitle>
                        <Content>
                            <BioPic src="https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/purple.jpg" alt="" />
                        </Content>
                    </Row>
                    <Row>
                        <SideTitle>Elevator pitch</SideTitle>
                        <Content>
                            <ParagraphTitle>
                                About me
                            </ParagraphTitle>
                            <p><span role="img" aria-label="waving hand">👋</span> I’m Chris — a product designer, developer, entrepreneur, and student attending Belmont University in Nashville, TN. I started my academic career as a Pre-Med student, but fast-forward a couple of years, and I found my love for computer science and design.</p>
                            <br />
                            <p>I find joy working on complex design problems, coding, exercising, playing sports and video games, and hanging with friends and family.</p>
                            <br />
                            <p>I have always loved technology – ever since I was able to use a computer. My joy for technology has led to my fascination with design and software. Being able to create products that help people is an amazing opportunity to make peoples’ lives easier.</p>
                        </Content>
                    </Row>
                    <Row>
                        <SideContainer>
                            <SideTitle>
                                Freelance
                            </SideTitle>
                        </SideContainer>
                        <Content>
                            <ParagraphTitle>
                                My freelance business
                            </ParagraphTitle>
                            <p>
                                I started my freelance design company back in February 2018. I have worked with
                                sneaker software companies that help their users purchase limited releases (think Supreme, Yeezy,
                                Jordans, etc.) to create marketing animations, web/product design projects, and other cool
                                stuff. One of my marketing animations has over 180,000,000 interactions on Twitter. Check that business out <a className="here" href="https://twitter.com/imagecrate" target="_blank" rel="noopener noreferrer">
                                    <BioLink
                                        whileTap={{ scale: 0.97, }}
                                        whileHover={{
                                            color: "#ced2fa",
                                            transition: { duration: 0.2 }
                                        }} className="link">here</BioLink>
                                </a>.</p>
                        </Content>
                    </Row>
                    <LastRow>
                        <SideTitle>My motivations</SideTitle>
                        <Content>
                            <ParagraphTitle>
                                Why product design?
                            </ParagraphTitle>
                            <p>Technology is ever-evolving, and never stagnant. It’s better than it was yesterday, but will always have room for improvement. New features, frameworks, libraries, and products come out everyday. Long story short, I love learning.</p>
                        </Content>
                    </LastRow>
                </ContentContainer>
            </AboutWrapper>
            <Footer />
        </>
    );
};

export default About;