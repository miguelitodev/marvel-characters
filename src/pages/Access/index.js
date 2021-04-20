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
                    <InputPublicKey
                        placeholder="Public key"
                        id="public-key"
                        name="public-key"
                        type="text"
                    />
                    <InputPrivateKey
                        placeholder="Private key"
                        id="private-key"
                        name="private-key"
                        type="text"
                    />
                </ContentInputs>
                <ButtonAccess>Acessar</ButtonAccess>
            </Card>
        </BackgroundAccess>
    );
};
export default Access;
