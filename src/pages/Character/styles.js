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

export const Title = styled.h2`
    color: var(--title);
    text-transform: uppercase;
`;

export const GoBack = styled.button`
    width: 100px;
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
`;

export const Main = styled.main`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 50px;
`;
export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 50px 0px;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const ImageCharacter = styled.img`
    width: 360px;
    height: 360px;
    object-fit: cover;

    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px var(--shadow);
    -moz-box-shadow: 0px 0px 5px 0px var(--shadow);
    box-shadow: 0px 0px 5px 0px var(--shadow);

    @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContentCharacter = styled.div`
    width: 50%;

    @media (max-width: 1024px) {
        width: 100%;
        margin-top: 15px;
    }
`;

export const NameCharacter = styled.h1`
    color: var(--title);
`;

export const DescriptionCharacter = styled.p`
    color: var(--text);
    text-align: justify;
`;

export const ListComics = styled.div``;

export const TitleStage = styled.h2`
    text-align: center;
    margin: 60px 0;
    color: var(--title);
    font-size: 30px;
`;

export const ContentComics = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;

    @media (max-width: 1024px) {
        grid-template-columns: 100%;
    }
`;

export const Comics = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    margin-top: 50px;
`;

export const ImageComics = styled.img`
    width: 200px;
    height: 311px;
    object-fit: cover;
`;

export const TextComics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 15px;
`;

export const TitleComics = styled.h3`
    color: var(--title);
    margin-bottom: 5px;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 1024px) {
        -webkit-line-clamp: 15;
    }
`;

export const DescriptionComics = styled.p`
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 14;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 1024px) {
        -webkit-line-clamp: 15;
    }
`;
