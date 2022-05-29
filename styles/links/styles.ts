import Link from "next/link";
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

  :hover{
    transform: scale(1.10);
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
