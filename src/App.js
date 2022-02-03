import "./App.css";
import { GiAlienEgg } from "react-icons/gi";
import { useForm } from "react-hook-form";
import Loading from "./components/Loading";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [toggle, setToggle] = useState(false);
  const onSubmit = (data) => {
    setToggle(true);

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
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                className={errors.email ? "form-control error" : "form-control"}
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <span className="feedback-error">
                  O campo e-mail é obrigatório
                </span>
              )}
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                className={
                  errors.password ? "form-control error" : "form-control"
                }
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <span className="feedback-error">
                  O campo senha é obrigatório
                </span>
              )}
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
