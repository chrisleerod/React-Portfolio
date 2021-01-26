import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    background-color: #50595F;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    color: #F2F2F2;
    margin: 0 auto;
    margin-top: 128px;
`;

export const Graphic = styled.div`
    height: 100%;
    margin-top: 128px;
    background-image: ${props => props.graphic};
`;