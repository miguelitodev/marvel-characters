import { useState, useEffect } from "react";
import Container from "../../components/Container";

import {
    Header,
    Title,
    Main,
    CardCharacter,
    NameCharacter,
    DescriptionCharacter,
    LastUpdate,
    SeeMore,
    NameCharacterTitle,
    DescriptionCharacterTitle,
    LastUpdateTitle,
    SeeMoreTitle,
    Footer,
    ContainerPages,
    LinkPage,
} from "./styles";

import { request } from "./../../store/Requester/Resquester.actions";
import { useDispatch, useSelector } from "react-redux";
import { save } from "../../store/PreserverKeys/PreserverKeys.actions";

import format from "date-fns/format";

export default function Characters() {
    const [dataCharacters, setDataCharacters] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        requestCharacters();
    }, []);

    const keys = useSelector((state) => state.preserverKeys);

    async function requestCharacters() {
        try {
            const response = await request(
                "/v1/public/characters",
                keys.publicKey,
                keys.privateKey
            );
            setDataCharacters(response.data.data.results);
        } catch (error) {
            dispatch(save("", "", false));
            console.log(error);
        }
    }

    return (
        <Container>
            <Header>
                <Title>Characters</Title>
            </Header>

            <Main>
                <CardCharacter>
                    <NameCharacterTitle>Name</NameCharacterTitle>
                    <DescriptionCharacterTitle>
                        Character Description
                    </DescriptionCharacterTitle>
                    <LastUpdateTitle>Last Update</LastUpdateTitle>
                    <SeeMoreTitle>See more</SeeMoreTitle>
                </CardCharacter>

                {dataCharacters.map((character) => (
                    <CardCharacter key={character.id}>
                        <NameCharacter>{character.name}</NameCharacter>
                        <DescriptionCharacter>
                            {character.description !== ""
                                ? character.description
                                : "Whithout Description"}
                        </DescriptionCharacter>
                        <LastUpdate>
                            {format(
                                Date.parse(character.modified),
                                "EEEE, d MMMM yyyy"
                            )}
                        </LastUpdate>
                        <SeeMore>See more</SeeMore>
                    </CardCharacter>
                ))}
            </Main>

            <Footer>
                <ContainerPages>
                    <LinkPage>&laquo;</LinkPage>
                    <LinkPage>1</LinkPage>
                    <LinkPage>2</LinkPage>
                    <LinkPage>3</LinkPage>
                    <LinkPage>4</LinkPage>
                    <LinkPage>5</LinkPage>
                    <LinkPage>&raquo;</LinkPage>
                </ContainerPages>
            </Footer>
        </Container>
    );
}
