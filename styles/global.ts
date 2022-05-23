import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        scroll-behavior: smooth;
    }
    body{
        background: #090a1a;
        width: 100%;
        min-height: 100%;
    }
`;
