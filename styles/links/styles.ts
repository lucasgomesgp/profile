import styled, { keyframes } from "styled-components";

const mouseClick = keyframes`
  from{
    transform: translateX(0) translateY(0);
    }
    50%{
      transform: translateX(100px);
    }
  to{
    transform:  translateY(100px);
  /* top: 0; */
  /* width: 22px;
  height: 22px; */
  }
`;

const Container = styled.main``;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #ffffff;
  gap: 1rem;
`;

const ImgArea = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    #bc7add 0.52%,
    #5c59df 32.81%,
    #6f48df 49.48%,
    #8a20dd 66.67%,
    #b00fff 92.71%
  );
  border-radius: 50%;
  padding: 0.25rem;
  position: relative;

  img {
  }

  #mouse {
    position: absolute;
    animation: ${mouseClick} 1s alternate linear forwards infinite;
    top: -20px;
  }
`;

const Text = styled.h3``;

const Icons = styled.div``;

export { Container, Wrapper, ImgArea, Text, Icons };
