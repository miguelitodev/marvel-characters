import styled from "styled-components";

export const ListPages = styled.ul`
    width: 400px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const Page = styled.li``;

export const Button = styled.button`
    width: 45px;
    height: 45px;
    border: 2px var(--border) solid;
    border-radius: 2px;
    color: var(--text);
    font-weight: 600;

    &.btn-is-active {
        border: solid 4px var(--green-accepted);
        color: var(--green-accepted);
        font-weight: 900;
    }
`;
