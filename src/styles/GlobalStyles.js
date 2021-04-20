import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
        width: 100%;
    }
    *, button, input {
        font-family: 'Roboto', sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    :root {

    }
`;
