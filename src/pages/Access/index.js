import React from "react";
import { Link, Redirect } from "react-router-dom";

import {
    BackgroundAccess,
    Card,
    Title,
    Message,
    ContentInputs,
    InputPublicKey,
    InputPrivateKey,
    ButtonAccess,
} from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { verify } from "../../store/VerifierKeys/VerifierKeys.actions";
import { save } from "../../store/PreserverKeys/PreserverKeys.actions";

const Access = () => {
    const [message, setMessage] = React.useState("");
    const [publicKey, setPublicKey] = React.useState("");
    const [privateKey, setPrivateKey] = React.useState("");

    const dispatch = useDispatch();
    const result = useSelector((state) => state.preserverKeys);

    async function verifyKeys() {
        try {
            const response = await verify(publicKey, privateKey);
            if (response.status === 200) {
                dispatch(save(publicKey, privateKey, true));
                setMessage("Sucesso, você será redirecionado.");
                return true;
            }
        } catch (error) {
            dispatch(save("", "", false));
            setMessage(
                "Keys invalidas ou um problema interno, tente novamente."
            );
        }
    }

    return (
        <BackgroundAccess>
            <Card>
                <Title>Dados de acesso</Title>
                <Message>{message}</Message>
                <ContentInputs>
                    <InputPublicKey
                        placeholder="Public key"
                        id="public-key"
                        name="public-key"
                        type="text"
                        value={publicKey}
                        onChange={(e) => {
                            setPublicKey(e.target.value);
                        }}
                    />
                    <InputPrivateKey
                        placeholder="Private key"
                        id="private-key"
                        name="private-key"
                        type="text"
                        value={privateKey}
                        onChange={(e) => {
                            setPrivateKey(e.target.value);
                        }}
                    />
                </ContentInputs>
                <ButtonAccess
                    onClick={() => {
                        verifyKeys();
                        console.log(result);
                    }}
                >
                    Acessar
                </ButtonAccess>
            </Card>
        </BackgroundAccess>
    );
};
export default Access;
