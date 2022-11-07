import { CaretUp } from "phosphor-react";
import React from "react";
import { navigateToTop } from "../../../utils/navigateTo";
import { Container } from "./styles";

export function BackToTop() {
  return (
    <Container onClick={navigateToTop}>
      <CaretUp size={20} color="#eae6e6" weight="bold" />
    </Container>
  );
}
