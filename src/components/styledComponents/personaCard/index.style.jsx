import styled from 'styled-components'

export const PersonaWrapper = styled.div`
    padding: 24px;
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #131419;
    border-radius: 8px;
    @media only screen and (max-width: 500px) {
        padding: 16px;
        flex-direction: column;
    }
`;

export const ContentWrapper = styled.div`
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #F2F2F2;
    font-weight: 600;
    @media only screen and (max-width: 500px) {
        text-align: center;
    }
`;

export const TopTitle = styled.div`
    font-size: 14px;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
    color: #F2F2F2;
    font-weight: 600;
`;

export const Name = styled.div`
    letter-spacing: -0.014em;
    font-size: 18px;
    font-weight: bold;
    color: #F2F2F2;
`;

export const Person = styled.div`
    max-width: 64px;
    width: 100%;
    height: 64px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    margin-right: 24px;
    @media only screen and (max-width: 500px) {
        margin-right: 0px;
        margin-bottom: 16px;
    }
`;

export const Paragraph = styled.p`
    color: #F2F2F2;
    line-height: 1.5em;
    font-weight: 400;
    opacity: 0.8;
    font-size: 16px;
    margin-top: 8px;
`;