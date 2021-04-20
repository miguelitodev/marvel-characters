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

export default function Characters() {
    return (
        <Container>
            <Header>
                <Title>Characters</Title>
            </Header>
            <Main>
                <CardCharacter>
                    <NameCharacterTitle>Nome personagem</NameCharacterTitle>
                    <DescriptionCharacterTitle>
                        Descrição personagem
                    </DescriptionCharacterTitle>
                    <LastUpdateTitle>Última atualização</LastUpdateTitle>
                    <SeeMoreTitle>Ver Mais</SeeMoreTitle>
                </CardCharacter>
                <CardCharacter>
                    <NameCharacter>Nome personagem</NameCharacter>
                    <DescriptionCharacter>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like).
                    </DescriptionCharacter>
                    <LastUpdate>Última atualização</LastUpdate>
                    <SeeMore>Ver mais</SeeMore>
                </CardCharacter>
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
