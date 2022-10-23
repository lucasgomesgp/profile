import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 10.25rem;
  padding-bottom: 2rem;
  flex-wrap: wrap;
  img{
    transition: all 200ms;
    :hover{
      opacity: 0.5;
    }
  }
  @media screen and (min-width: 48rem){
    gap: 4.5rem;
  }
`;
