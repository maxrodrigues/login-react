import React from "react";
import { DefaultField, Error, InputLabel } from "./styles";

const Input = React.forwardRef((props, ref) => {
  const { label, type, errors, ...rest } = props;
  const inputName = rest.name;

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <DefaultField type={type} {...rest} ref={ref} />
      {inputName in errors && <Error>O campo {label} é obrigatório</Error>}
    </>
  );
});

/* const Input = (props) => {
  const { label, type, errors, ...rest } = props;
  const inputName = rest.name;

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <DefaultField type={type} {...rest} />
      {inputName in errors && <Error>O campo {label} é obrigatório</Error>}
    </>
  );
}; */

export default Input;
