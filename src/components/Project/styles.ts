import styled from "styled-components";

const button = `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 10rem;
    height: 3.4375rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;

    @media screen and (max-width: 26.5625rem) {
      width: 7rem;
      gap: 0.2rem;
      svg{
        width: 24px;
        height: 24px;
      }
    }
    
`;
const Container = styled.section`
  max-width: 500px;
`;

const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 1rem;
  gap: 0.5rem;
`;

const WrapperImg = styled.div`
  position: relative;
  transition: all 200ms;
  :hover {
    #btns {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    #project {
      opacity: 0.5;
      transition: all 200ms;
    }
  }
`;

const Text = styled.p`
  text-align: justify;
  padding-top: 1.125rem;
  max-width: 450px;
`;

const Buttons = styled.div`
  display: none;
  position: absolute;
  gap: 2rem;
  top: 40%;
  padding: 0 2rem;
`;

const Github = styled.button`
  ${button};
  background-color: #090a1a;
`;

const BtnText = styled.p`
  font-weight: 600;
  font-size: 1.25rem;

  @media screen and (max-width: 48rem) {
    font-size: 1rem;
  }
`;

const Deploy = styled.button`
  ${button};
  background-color: #0c6291;
`;
export {
  Container,
  ContainerTags,
  Text,
  WrapperImg,
  Buttons,
  Github,
  BtnText,
  Deploy,
};
