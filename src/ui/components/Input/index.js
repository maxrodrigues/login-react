import React from "react";
import { Container, DefaultField, Error, InputLabel } from "./styles";

const Input = React.forwardRef((props, ref) => {
  const { label, type, errors, ...rest } = props;
  const inputName = rest.name;

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <DefaultField type={type} {...rest} ref={ref} />
      {inputName in errors && <Error>O campo {label} é obrigatório</Error>}
    </Container>
  );
});

export default Input;
