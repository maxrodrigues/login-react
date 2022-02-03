import React from "react";
import { Component, Container } from "./styles";

const Button = React.forwardRef((props, ref) => {
  const { label } = props;
  return (
    <Container>
      <Component ref={ref}>{label}</Component>
    </Container>
  );
});

export default Button;
