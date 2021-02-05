import styled from 'styled-components'

export const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 640px;
`;

export const Info = styled.div`
    margin-right: 32px;
    margin-top: 32px;
    p {
        font-size: 16px;
        color: #F2F2F2;
        opacity: 0.9;
        letter-spacing: -0.011em;
    }
`;

export const Title = styled.div`
    font-size: 14px;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
    color: #F2F2F2;
    font-weight: 600;
`;