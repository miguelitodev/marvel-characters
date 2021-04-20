import {
    BackgroundAccess,
    Card,
    Title,
    ContentInputs,
    InputPublicKey,
    InputPrivateKey,
    ButtonAccess,
} from "./styles";

const Access = () => {
    return (
        <BackgroundAccess>
            <Card>
                <Title>Dados de acesso</Title>
                <ContentInputs>
                    <InputPublicKey />
                    <InputPrivateKey />
                </ContentInputs>
                <ButtonAccess>Acessar</ButtonAccess>
            </Card>
        </BackgroundAccess>
    );
};
export default Access;
