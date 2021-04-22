import React from "react";

import store from "./../../store/store";

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

import Container from "./../../components/Container";

export default function Character() {
    React.useEffect(() => console.log(store.getState()));

    return (
        <Container>
            <Header>
                <Title>Abomination (Emil Blonsky)</Title>
                <GoBack>voltar</GoBack>
            </Header>
            <Main>
                <MainContent>
                    <ImageCharacter
                        src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg"
                        alt="personagem"
                    />
                    <ContentCharacter>
                        <NameCharacter>
                            Abomination (Emil Blonsky)
                        </NameCharacter>
                        <DescriptionCharacter>
                            Formerly known as Emil Blonsky, a spy of Soviet
                            Yugoslavian origin working for the KGB, the
                            Abomination gained his powers after receiving a dose
                            of gamma radiation similar to that which transformed
                            Bruce Banner into the incredible Hulk.
                        </DescriptionCharacter>
                    </ContentCharacter>
                </MainContent>
                <ListComics>
                    <TitleStage>Fascículos</TitleStage>
                    <ContentComics>
                        <Comics>
                            <ImageComics
                                src="http://i.annihil.us/u/prod/marvel/i/mg/2/e0/586bcdf9c3ecd.jpg"
                                alt="comic"
                            />
                            <TextComics>
                                <TitleComics>Avengers (1998) #61</TitleComics>
                                <DescriptionComics>
                                    A temporada de classificação de 2021 está
                                    finalmente aqui depois de alguns meses
                                    brincando com os itens novos e brilhantes da
                                    pré-temporada. Quer você tenha ficado
                                    desapontado com a classificação da última
                                    temporada, queira subir mais alto do que
                                    nunca, ou se você for completamente novo no
                                    jogo, o grind de classificação começou.
                                    Então, se você quiser aumentar seu pool de
                                    campeões para ter certeza de que está
                                    pronto, aqui estão nossas melhores escolhas
                                    para ajudá-lo a escalar em cada função!
                                    jogo, o grind de classificação começou.
                                    Então, se você quiser aumentar seu pool de
                                    campeões para ter certeza de que está
                                    pronto, aqui estão nossas melhores escolhas
                                    para ajudá-lo a escalar em cada função!
                                </DescriptionComics>
                            </TextComics>
                        </Comics>
                        <Comics>
                            <ImageComics
                                src="http://i.annihil.us/u/prod/marvel/i/mg/2/e0/586bcdf9c3ecd.jpg"
                                alt="comic"
                            />
                            <TextComics>
                                <TitleComics>Avengers (1998) #61</TitleComics>
                                <DescriptionComics>
                                    The team gains new international status, but
                                    will everyone accept it? Avengers come and
                                    go as the new lineup is established and new
                                    threats await!
                                </DescriptionComics>
                            </TextComics>
                        </Comics>
                        <Comics>
                            <ImageComics
                                src="http://i.annihil.us/u/prod/marvel/i/mg/2/e0/586bcdf9c3ecd.jpg"
                                alt="comic"
                            />
                            <TextComics>
                                <TitleComics>Avengers (1998) #61</TitleComics>
                                <DescriptionComics>
                                    The team gains new international status, but
                                    will everyone accept it? Avengers come and
                                    go as the new lineup is established and new
                                    threats await!
                                </DescriptionComics>
                            </TextComics>
                        </Comics>
                    </ContentComics>
                </ListComics>
            </Main>
        </Container>
    );
}
