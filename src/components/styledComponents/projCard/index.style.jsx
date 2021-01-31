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

export const ProjWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #283237;
    @media only screen and (max-width: 500px) {
        {
            flex-direction: column;
        }
    }
`;

export const ProjImgContainer = styled.div`
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const ProjImg = styled.img`
    position: absolute;
    width: 720px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -128px;
    @media only screen and (max-width: 500px) {
        {
            transform: translateX(-10%);
            width: 512px;
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

export const ProjContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    border-radius: 0px 8px 8px 0px;
    height: 100%;
    width: 100%;
    position: relative;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: #F2F2F2;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
`;

export const Title = styled.h6`
    color: #F2F2F2;
    margin-top: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #F2F2F2;
    font-weight: 400;
    line-height: 1.5em;
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