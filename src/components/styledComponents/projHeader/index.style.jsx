import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    padding: 0 32px;
    background-color: #50595F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;
    margin-top: -72px;
    overflow: hidden;
    @media only screen and (max-width: 500px) {
        padding: 0 24px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #F2F2F2;
    margin: 0 auto;
    margin-top: 200px;
    @media only screen and (max-width: 500px) {
        font-size: 31.25px;
        letter-spacing: -0.022em;
    }
`;

export const Graphic = styled.img`
    pointer-events: none;
    margin: 0 auto;
    margin-top: 128px;
    max-width: 552px;
    max-height: 448px;
    width: 100%;
    height: 100%;
    background-image: ${props => props.graphic};
`;