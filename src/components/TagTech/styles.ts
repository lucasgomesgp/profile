import styled from "styled-components";

const Tag = styled.span`
  cursor: pointer;
  border: 2px solid transparent;
  color: #ffffff;
  background-origin: border-box;
  background-image: linear-gradient(#090a1a, #090a1a),
    linear-gradient(
      180deg,
      #bc7add 0.52%,
      #5c59df 32.81%,
      #6f48df 49.48%,
      #8a20dd 66.67%,
      #b00fff 92.71%
    );
  background-clip: content-box, border-box;
  border-radius: 4px;
  transition: all 500ms;

  :hover {
    opacity: 0.5;
  }
  &::before{
    content: "";
    padding: 0.2rem;
  }
  &::after{
    content: "";
    padding: 0.2rem;
  }
`;

export { Tag };
