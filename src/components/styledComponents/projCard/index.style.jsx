import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    min-height: 250px;
    min-width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 1px solid #283237;
    @media only screen and (max-width: 500px) {
            flex-direction: column;
        }
    }
`;

export const ProjWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #283237;
    background: linear-gradient(45deg, rgba(160,19,233,.8) 0%, rgba(237,136,145,.8) 100%);
    @media only screen and (max-width: 500px) {
            flex-direction: column;
        }
    }
`;

export const ProjImgContainer = styled.div`
    background-image: url('https://raw.githubusercontent.com/chrisleerod/React-Portfolio/master/src/components/images/pd-project-pic.png');
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    bottom: 0px;
    right: 0px;
    background-position: center;
    @media only screen and (max-width: 500px) {
        bottom: -96px;
        background-position: 80% 50%;
        background-size: 225%;
        background-repeat: no-repeat;
        transform-origin: right;
    }
`;

export const ProjImg = styled.img`
    position: absolute;
    width: 1200px;
    right: -24px;
    bottom: -24px;
    @media only screen and (max-width: 1000px) {
            width: 800px;
            right: -24px;
            bottom: -24px;
        }
    @media only screen and (max-width: 500px) {
            width: 1200px;
            right: -350px;
            bottom: -64px;
        }
    }
`;

export const ImgWrapper = styled.div`
    min-width: 225px;
    border-radius: 8px 0px 0px 8px;
    @media only screen and (max-width: 500px) {
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
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 64px;
    border-radius: 0px 8px 8px 0px;
    height: 100%;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 1000px) {
        padding: 32px;
    }
    @media only screen and (max-width: 500px) {
        text-align: center;
        padding: 16px;
        margin-top: 32px;
        justify-content: start;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: #F2F2F2;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
`;

export const Title = styled.h5`
    color: #F2F2F2;
    margin-top: 16px;
`;

export const ProjTitle = styled.h4`
    color: #F2F2F2;
    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    font-size: 16px;
    color: #F2F2F2;
    font-weight: 400;
    line-height: 1.5em;
    margin-top: 8px;
    opacity: 0.8;
`;

export const ProjDescription = styled.p`
    font-size: 16px;
    color: #F2F2F2;
    font-weight: 400;
    line-height: 1.5em;
    margin-top: 8px;
    opacity: 0.8;
    max-width: 400px;
`;

export const Footer = styled.div`
    font-size: 14px;
    color: #F2F2F2;
    font-weight: 600;
    margin-top: auto;
    padding-top: 32px;
`;