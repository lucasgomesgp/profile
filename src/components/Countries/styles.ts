import styled from "styled-components";

interface ButtonProps {
  nameLang: string;
  activeLang: string;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  width: 30px;
  height: 30px;
  background: ${({ nameLang, activeLang }) =>
    nameLang === activeLang ? "rgba(255, 255, 255, 0.1)" : "none"};
  border: none;
  cursor: pointer;
  transition: 200ms all;

  :hover {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
