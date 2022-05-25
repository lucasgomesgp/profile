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
    
`;
const Container = styled.section`
  max-width: 500px;
`;

const WrapperImg = styled.div`
  position: relative;
  width: 400px;

  transition: all 200ms;
  :hover {
    #btns {
      display: flex;
    }
    #project {
      opacity: 0.5;
      transition: all 200ms;
    }
  }
`;

const Text = styled.p`
  text-align: left;
  margin-top: 1.125rem;
`;

const Buttons = styled.div`
  display: none;
  padding: 0 4rem;
  gap: 2rem;
  position: absolute;
  top: 40%;
`;

const Github = styled.button`
  ${button};
  background-color: #090a1a;
`;

const BtnText = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
`;

const Deploy = styled.button`
  ${button};
  background-color: #0c6291;
`;
export { Container, Text, WrapperImg, Buttons, Github, BtnText, Deploy };
