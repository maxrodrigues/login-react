import React from "react";
import { Label, Input, Container } from "./styles";

const Checkbox = React.forwardRef((props, ref) => {
  const { label, ...rest } = props;
  return (
    <Container>
      <Label>
        <Input type="checkbox" ref={ref} {...rest} />
        {label}
      </Label>
    </Container>
  );
});

export default Checkbox;
