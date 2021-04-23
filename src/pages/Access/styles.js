import styled from "styled-components";

export const BackgroundAccess = styled.div`
    height: 100vh;
    width: 100%;

    background-image: url("https://i.pinimg.com/originals/2f/d2/8a/2fd28a4c97689c7e05abe11bf5fba843.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 300px;
    height: 400px;
    background-color: var(--white);

    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px var(--shadow);
    -moz-box-shadow: 0px 0px 5px 0px var(--shadow);
    box-shadow: 0px 0px 5px 0px var(--shadow);

    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.h1`
    color: var(--title);
`;
export const Message = styled.span`
    color: var(--span);
`;

export const ContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const InputPublicKey = styled.input`
    width: 80%;
    padding: 10px;
    border: 3px var(--border) solid;
    border-radius: 2px;
    margin: 5px auto;
    color: var(--text);

    &::placeholder {
        color: var(--span);
        font-family: "Roboto", sans-serif;
        font-weight: 600;
    }

    &:focus {
        outline: dotted 1px var(--border);
    }
`;

export const InputPrivateKey = styled.input`
    width: 80%;
    padding: 10px;
    border: 3px var(--border) solid;
    border-radius: 2px;
    margin: 5px auto;
    color: var(--text);

    &::placeholder {
        color: var(--span);
        font-family: "Roboto", sans-serif;
        font-weight: 600;
    }

    &:focus {
        outline: dotted 1px var(--border);
    }
`;

export const ButtonAccess = styled.button`
    width: 50%;
    padding: 15px;

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
