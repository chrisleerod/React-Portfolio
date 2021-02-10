import styled from 'styled-components'

export const BlockImageContainer = styled.div`
    padding: 64px;
    background-color: #181A20;
    border-radius: 8px;
    max-width: 1080px;
    margin: 0 auto;
    @media only screen and (max-width: 500px) {
        padding: 16px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
`;

export const RegularImage = styled.img`
    flex-grow: 1;
    width: 100%;
    max-width: 1080px;
    display: block;
    margin: 0 auto;
    background-image: ${props => props.image};
`;