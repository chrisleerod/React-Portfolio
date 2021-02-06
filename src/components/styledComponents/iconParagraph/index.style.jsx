import styled from 'styled-components'

export const IconParagraphWrapper = styled.div`
    padding: 24px;
    max-width: 640px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    background-color: #131419;
    border-radius: 8px;
    @media only screen and (max-width: 500px) {
        padding: 16px;
    }
`;

export const Icon = styled.img`
    background-image: ${props => props.icon};
    margin-right: 24px;
    @media only screen and (max-width: 500px) {
        margin-right: 16px;
    }
`;

export const Paragraph = styled.p`
    color: #F2F2F2;
    line-height: 1.5em;
    font-weight: 500;
`;