import styled from "styled-components";

interface ButtonProps {
  nameLang: string;
  activeLang: string;
}
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
`;

export const Button = styled.button<ButtonProps>`
  background: ${({ nameLang, activeLang }) =>
    nameLang === activeLang ? "rgba(255, 255, 255, 0.1)" : "none"};
  border: none;
  cursor: pointer;
  transition: 200ms all;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
