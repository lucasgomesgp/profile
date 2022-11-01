import styled from "styled-components";

interface HamburgerProps {
  status: boolean;
}
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 55.125rem) {
    justify-content: center;
  }
  @media screen and (min-width: 48rem) {
    padding: 2.625rem 1.5625rem;
  }
  @media screen and (max-width: 48rem) {
    padding: 1rem 2rem;
    justify-content: space-between;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  a,
  button {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 1rem;
    border-radius: 10px;
    transition: all 500ms;
    background: transparent;
    border: none;
    cursor: pointer;

    :hover {
      background: hsla(0, 0%, 100%, 0.1);
    }
  }

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
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

  @media screen and (max-width: 48rem) {
    display: flex;
  }
`;

const HamburgerMenu = styled.nav<HamburgerProps>`
  position: absolute;
  display: ${(props) => (props.status ? "flex" : "none")};
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  top: 12%;
  left: 0;
  min-width: 100%;
  padding: 0;
  z-index: 9999;
  background: #111430;
  transition: all 1s;
  
  @media screen and (min-width: 48.2rem) {
    display: none;
  }
  a,
  button {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 0;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    :hover {
      color: #ffffffaa;
    }
  }
`;

export { Container, Menu, HamburgerBtn, HamburgerMenu };
