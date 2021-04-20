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

    button, a {
        cursor: pointer;
    }

    :root {
        --white: #fff;
        --shadow: rgba(171, 171, 171, 1);
        --title: #8c8c8c;
        --border: #c8c8c8;
        --text: #333;
        --span: #ccc;
        --green-accepted: #15b015;
        --card: #eee;
    }
`;
