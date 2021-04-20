import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    padding: 50px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        padding: 50px 15px;
    } ;
`;

export const Title = styled.h1`
    color: var(--title);
    text-transform: uppercase;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CardCharacter = styled.div`
    width: 100%;
    padding: 20px;

    background-color: var(--card);

    display: grid;
    grid-template-columns: 25% 40% 25% 10%;
    text-align: left;

    &:nth-child(even) {
        background-color: var(--white);
    }

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 100%;
        text-align: left;
    }
`;

export const NameCharacterTitle = styled.b`
    text-transform: uppercase;
    @media (max-width: 1024px) {
        margin-top: 5px;
    }
`;

export const DescriptionCharacterTitle = styled.b`
    text-transform: uppercase;
    @media (max-width: 1024px) {
        margin-top: 5px;
    }
`;

export const LastUpdateTitle = styled.b`
    margin-left: 25px;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        margin-left: 0px;
        margin-top: 5px;
    }
`;

export const SeeMoreTitle = styled.b`
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 1024px) {
        text-align: left;
        margin-top: 5px;
    }
`;

export const NameCharacter = styled.p`
    font-weight: 500;
    @media (max-width: 1024px) {
        font-size: 18px;
        margin-bottom: 5px;
    }
`;

export const DescriptionCharacter = styled.p`
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text);
`;

export const LastUpdate = styled.p`
    margin-left: 25px;
    color: var(--span);
    @media (max-width: 1024px) {
        margin-left: 0px;
        margin-top: 10px;
    }
`;

export const SeeMore = styled.button`
    width: 100%;
    height: 50px;
    padding: 5px;

    text-transform: uppercase;
    color: var(--white);
    font-weight: 800;

    border: none;
    border-radius: 5px;
    background-color: var(--green-accepted);

    &:focus {
        outline: dotted 1px var(--border);
    }

    @media (max-width: 1024px) {
        width: 150px;
        margin-top: 15px;
    }
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
`;

export const ContainerPages = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const LinkPage = styled.a``;
