import styled from "styled-components";

const Container = styled.section`
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
  .moveIcon{
    animation: iconMove 5s linear infinite;
  }
  @keyframes iconMove {
    0%{
      transform: translateY(-5px);
    }
    50%{
      transform: translateY(5px);
    }
    100%{
      transform: translateY(-5px);
    }
  }
`;

export { Container };
