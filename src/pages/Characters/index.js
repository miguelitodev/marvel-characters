import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Pagination from "../../components/Pagination";
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

const LIMIT = 20;

export default function Characters() {
    const [dataCharacters, setDataCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        requestCharacters();
    }, [offset]);

    const keys = useSelector((state) => state.preserverKeys);

    async function requestCharacters() {
        try {
            const response = await request(
                `/v1/public/characters?offset=${offset}&limit=${LIMIT}`,
                keys.publicKey,
                keys.privateKey
            );
            setTotal(response.data.data.total);
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
                        <Link to={`/character/${character.id}`}>
                            <SeeMore>See more</SeeMore>
                        </Link>
                    </CardCharacter>
                ))}
            </Main>

            <Footer>
                <Pagination
                    limit={LIMIT}
                    total={total}
                    offset={offset}
                    setOffset={setOffset}
                />
            </Footer>
        </Container>
    );
}
