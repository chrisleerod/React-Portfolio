import styled from 'styled-components'

export const BlockImageContainer = styled.div`
    padding: 64px;
    background-color: #191E21;
    border-radius: 8px;
    max-width: 1040px;
    margin: 0 auto;
    @media only screen and (max-width: 500px) {
        padding: 16px;
    }
`;

export const RegularImage = styled.img`
    max-width: 1040px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-image: ${props => props.image};
`;