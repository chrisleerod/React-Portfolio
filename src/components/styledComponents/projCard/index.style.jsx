import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    min-height: 250px;
    min-width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #283237;
    @media only screen and (max-width: 500px) {
        {
            flex-direction: column;
        }
    }
`;

export const ImgWrapper = styled.div`
    min-width: 225px;
    background-color: #283237;
    border-radius: 8px 0px 0px 8px;
    @media only screen and (max-width: 500px) {
        {
            min-height: 225px;
            border-radius: 8px 8px 0px 0px;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 0px 8px 8px 0px;
    width: 100%;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: #F2F2F2;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    color: #F2F2F2;
    margin-top: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #F2F2F2;
    font-weight: 400;
    line-height: 1.65em;
    margin-top: 8px;
    opacity: 0.8;
`;

export const Footer = styled.div`
    font-size: 14px;
    color: #F2F2F2;
    font-weight: 600;
    margin-top: auto;
    padding-top: 32px;
`;