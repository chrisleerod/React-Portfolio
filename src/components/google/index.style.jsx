import styled from 'styled-components'

export const ContentWrapper = styled.div`
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;;
    @media only screen and (max-width: 500px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

export const MaxWidth = styled.div`
    max-width: 1264px;
    padding-left: 32px;
    padding-right: 32px;
`;