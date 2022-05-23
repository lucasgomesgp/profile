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
const Title = styled.h1``;
const SubText = styled.div``;

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
