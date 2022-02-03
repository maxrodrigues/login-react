import "./App.css";
import { GiAlienEgg } from "react-icons/gi";
import { useForm } from "react-hook-form";
import Loading from "./ui/components/Loading";
import Input from "./ui/components/Input";
import React, { useState } from "react";
import Button from "./ui/components/Button";
import Checkbox from "./ui/components/Checkbox";

import Swal from "sweetalert2";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [toggle, setToggle] = useState(false);
  const ref = React.useRef();

  const onSubmit = (data) => {
    setToggle(true);

    console.log(data);

    setTimeout(() => {
      setToggle(false);
      Swal.fire("Sucesso", "Seu login e senha foram aceitos", "success");
    }, 5000);
  };

  return (
    <>
      <Loading toggleLoading={toggle} />
      <div className="app">
        <div className="login-area">
          <GiAlienEgg
            color="00008b"
            size="5em"
            style={{ margin: "0 auto", display: "block", marginTop: "40px" }}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="E-mail"
              type="email"
              errors={errors}
              ref={ref}
              {...register("email", { required: true })}
            />
            <Input
              label="Senha"
              type="password"
              errors={errors}
              ref={ref}
              {...register("password", { required: true })}
            />
            <Checkbox
              label="Mantenha-me conectado"
              ref={ref}
              {...register("remember")}
            />
            <Button label="Enviar" ref={ref} />
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
