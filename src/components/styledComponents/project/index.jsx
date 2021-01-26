import React from "react";
import ProjHeader from "../projHeader";
import Info from "../projInfo";

import {
    ProjectWrapper,
    ContentWrapper,
  } from './index.style';

const Project = ({ }) => {
    return (
        <ProjectWrapper>
            <ProjHeader 
            />
            <ContentWrapper>
                <Info />
            </ContentWrapper>
        </ProjectWrapper>
    );
};

export default Project;