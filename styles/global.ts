import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg, #BC7ADD 0.52%, #5C59DF 32.81%, #6F48DF 49.48%, #8A20DD 66.67%, #B00FFF 92.71%);
        border-radius: 20px;
    }
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
    p{
        color: #FFFFFF;
    }
`;
