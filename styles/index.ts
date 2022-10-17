import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const lightBorder = keyframes`
  from{
    border-right-color: transparent;
  }
  to{
    border-right-color: #FFFFFF;
  }
`;

const widthAlternate = keyframes`
  from{
    width: 0px;
  }
  to{
    width: 82%;
  }
`;
const moveLeft = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
`;

const moveRight = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 0;
  }
`;

const Main = styled.main`
  width: 100%;
`;

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.25rem;
  margin-top: 4rem;
  flex-wrap: wrap;

  #profilePhoto {
    position: relative;
    animation: ${moveRight} 1s ease-in 1;
  }
`;

const Texts = styled.div`
  position: relative;
  animation: ${moveLeft} 1s ease-in 1;
`;
const Title = styled.h1`
  font-size: 3.25rem;
  background: linear-gradient(
    180deg,
    #bc7add 0.52%,
    #5c59df 32.81%,
    #6f48df 49.48%,
    #8a20dd 66.67%,
    #b00fff 92.71%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const SubText = styled.p`
  position: relative;
  overflow: hidden;
  width: 0;
  white-space: nowrap;
  animation: ${widthAlternate} 3.5s steps(40, end) 2 1s forwards,
    ${lightBorder} 250ms alternate infinite;
  border-right: 2px solid #ffffff;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
`;
const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.2);
  font-family: "Inter", sans-serif;
  margin-top: 10rem;
  font-size: 3rem;

  @media screen and (min-width: 48rem) {
    margin-top: 21.3125rem;
    font-size: 6.25rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 130px;
  margin-top: 8rem;
`;
const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5.9375rem;
  gap: 8.0625rem;
`;
const TextSection = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: all 1s;
`;

const ImgArea = styled(motion.div)`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  position: relative;
  transition: all 1s;
`;
const Text = styled.p`
  margin: 0 auto;
  margin-bottom: 6.25rem;

  @media screen and (min-width: 48rem) {
    width: 30rem;
  }
`;
const TitleSection = styled.h4`
  font-size: 2.5rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2.9375rem;
`;

const EducationalArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.375rem;
  text-align: center;
`;
const Type = styled.section``;
const Small = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;
const TypeStudy = styled.p`
  font-size: 1rem;
  font-weight: 700;
  width: 90%;
  margin: 0 auto;
  margin-top: 1.125rem;
`;
const Time = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1.125rem;
`;

const Habilities = styled.section`
  text-align: center;
`;

const TitleHabilities = styled.h4`
  margin-top: 2.625rem;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 400;
`;
const HabilitiesSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  overflow: hidden;
  @media screen and (max-width: 64rem) {
    flex-wrap: wrap;
    gap: 4rem;
  }
  @media screen and (min-width: 48rem) {
    padding: 0 5.3125rem;
    margin-top: 10.25rem;
  }

  @media screen and (min-width: 64rem) {
    gap: 8rem;
  }
  @media screen and (min-width: 75rem) {
    gap: 11.875rem;
  }
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 500ms;
  padding: 1rem;
  border-radius: 20px;

  :hover {
    background-color: #111430;
  }
`;
const Circle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  position: relative;

  #bgCircle {
    position: absolute;
    top: 0;
    transition: 1s all;
    cursor: pointer;

    :hover {
      transform: rotate(360deg);
      filter: opacity(10);
    }
  }
`;
const Paragraph = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-top: 2rem;
`;

const Projects = styled.section`
  text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "Inter", sans-serif;
  margin-top: 13.1875rem;

  @media screen and (max-width: 48rem) {
    gap: 10rem;
  }
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

const TitleSmall = styled.h5`
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.875rem;
`;

const MailLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-weight: 100;
`;

const MenuItem = styled.a`
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ffffff;
    animation: moveDot 2s infinite forwards alternate;
  }
  #dot1 {
  }
  
  #dot2 {
    animation-delay: 500ms;
  }

  #dot3 {
    animation-delay: 1s;
  }

  @keyframes moveDot {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateY(-10px);
      opacity: 0.5;
    }
  }
`;

export {
  Main,
  HomeSection,
  Texts,
  Title,
  SubText,
  AboutMe,
  SubTitle,
  Container,
  AboutSection,
  ImgArea,
  TextSection,
  Text,
  TitleSection,
  EducationalArea,
  Type,
  Small,
  TypeStudy,
  Time,
  Habilities,
  TitleHabilities,
  HabilitiesSection,
  Section,
  Circle,
  Paragraph,
  Projects,
  Footer,
  Element,
  TitleSmall,
  MailLink,
  MenuItem,
  Wrapper,
};
