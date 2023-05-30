import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth !important;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
   
    ::-webkit-scrollbar{
        width: 7px;
    }
    ::-webkit-scrollbar-thumb{
        background: linear-gradient(180deg, #BC7ADD 0.52%, #5C59DF 32.81%, #6F48DF 49.48%, #8A20DD 66.67%, #B00FFF 92.71%);
        border-radius: 20px;
    }

    body{
        background: #090a1a;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }
    p{
        color: #FFFFFF;
    }
`;
