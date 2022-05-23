import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.625rem 7.5625rem;
  flex-wrap: wrap;
`;

const LogoArea = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  gap: 1.25rem;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
`;
const Main = styled.main``;

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8.25rem;
  margin-top: 4rem;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 3.25rem;
  background: linear-gradient(180deg, #BC7ADD 0.52%, #5C59DF 32.81%, #6F48DF 49.48%, #8A20DD 66.67%, #B00FFF 92.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const SubText = styled.p`
  color: #FFFFFF;
`;

const HamburgerMenu = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 30px;
  width: 2rem;
  border: none;
  background: transparent;
  cursor: pointer;

  span {
    width: 100%;
    background: #ffffff;
    height: 2px;
  }
`;

export {
  Header,
  HamburgerMenu,
  LogoArea,
  Menu,
  Main,
  HomeSection,
  Texts,
  Title,
  SubText,
};
