import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  flex-wrap: wrap;
`;
const Title = styled.h2`
  font-size: 2rem;
`;
const Container = styled.ul`
  margin-top: 2rem;
  padding: 0 2rem;
`;
const Item = styled.li`
  margin-top: 1rem;
  font-size: 0.8rem;
  transition: all .2s;
  a {
    color: #ffffff;
    :hover{
        opacity: 0.8;
    }
  }
`;

export { Main, Title, Container, Item };
