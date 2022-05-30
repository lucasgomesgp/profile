import styled, { keyframes } from "styled-components";

const mouseMove = keyframes`
    10%{
      transform: translateX(0) translateY(-40px) scale(0.8);
    }
    20%{
      transform: translateX(100px) translateY(-30px);
    }
    30%{
      transform: translateX(120px) translateY(20px);
    }
    40%{
      transform: translateX(100px) translateY(40px);
    }
    50%{
      transform: translateX(-100px) translateY(80px);
    }
    60%{
      transform: translateX(-100px) translateY(90px);
    }
    70%{
      transform: translateX(80px) translateY(90px);
    }
    80%{
      transform: translateX(50px) translateY(90px);
    }
    90%{
      transform: translateX(-20px) translateY(90px);
    }
    100%{
      transform: translateX(0);
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

  #mouse {
    position: absolute;
    animation: ${mouseMove} 10s infinite;
    -webkit-animation: ${mouseMove} 10s infinite;
    z-index: 5;
  }
`;

const Text = styled.h3``;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  gap: 2rem;
  flex-wrap: wrap;
`;

const LinkIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 10rem;
  padding: 0 1rem;
  border: none;
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: #111430;
  text-decoration: none;
  transition: 200ms all;

  :hover {
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Small = styled.span`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
`;
export { Container, Wrapper, ImgArea, LinkIcon, Text, Icons, Small };
