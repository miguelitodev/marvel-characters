import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";
import { save } from "../../store/PreserverKeys/PreserverKeys.actions";
import { request } from "../../store/Requester/Resquester.actions";

import Container from "./../../components/Container";
import {
    Header,
    Title,
    GoBack,
    Main,
    MainContent,
    ImageCharacter,
    ContentCharacter,
    NameCharacter,
    DescriptionCharacter,
    ListComics,
    TitleStage,
    ContentComics,
    Comics,
    ImageComics,
    TextComics,
    TitleComics,
    DescriptionComics,
} from "./styles";

export default function Character() {
    const [dataCharacter, setDataCharacter] = useState([]);
    const [dataCharacterComics, setDataCharacterComics] = useState([]);
    const { id } = useParams();

    useEffect(() => console.log(id), []);

    const dispatch = useDispatch();

    useEffect(() => {
        requestCharacter();
        requestCharacterComics();
    }, []);

    const keys = useSelector((state) => state.preserverKeys);

    async function requestCharacter() {
        try {
            const response = await request(
                `/v1/public/characters/${id}`,
                keys.publicKey,
                keys.privateKey
            );
            setDataCharacter(response.data.data.results[0]);
        } catch (error) {
            dispatch(save("", "", false));
            console.log(error);
        }
    }

    async function requestCharacterComics() {
        try {
            const response = await request(
                `/v1/public/characters/${id}/comics`,
                keys.publicKey,
                keys.privateKey
            );
            console.log(response.data.data.results);
            setDataCharacterComics(response.data.data.results);
        } catch (error) {
            dispatch(save("", "", false));
            console.log(error);
        }
    }

    return (
        <Container>
            <Header>
                <Title>{dataCharacter.name}</Title>
                <Link to="/characters">
                    <GoBack>voltar</GoBack>
                </Link>
            </Header>
            <Main>
                <MainContent>
                    <ImageCharacter
                        src={`${dataCharacter.thumbnail?.path}.${dataCharacter.thumbnail?.extension}`}
                        alt="personagem"
                    />
                    <ContentCharacter>
                        <NameCharacter>{dataCharacter.name}</NameCharacter>
                        <DescriptionCharacter>
                            {dataCharacter.description !== ""
                                ? dataCharacter.description
                                : "Whithout Description"}
                        </DescriptionCharacter>
                    </ContentCharacter>
                </MainContent>
                <ListComics>
                    <TitleStage>Comics</TitleStage>
                    <ContentComics>
                        {dataCharacterComics.map((comic) => (
                            <Comics>
                                <ImageComics
                                    src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
                                    alt="Comic Thumbnail"
                                    loading="lazy"
                                />
                                <TextComics>
                                    <TitleComics>{comic.title}</TitleComics>
                                    <DescriptionComics>
                                        {comic.description !== null
                                            ? comic.description
                                            : "Whithout Description"}
                                    </DescriptionComics>
                                </TextComics>
                            </Comics>
                        ))}
                    </ContentComics>
                </ListComics>
            </Main>
        </Container>
    );
}
