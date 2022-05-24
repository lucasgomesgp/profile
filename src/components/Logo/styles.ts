import styled from "styled-components";

const LogoArea = styled.div`
  cursor: pointer;
  position: relative;

  #logo {
    #name {
      animation: animateLogo 2s ease linear 1;
    }
  }
  @keyframes animateLogo {
    0% {
      display: none;
    }
    100% {
      display: initial;
    }
  }
`;

export {
    LogoArea
};