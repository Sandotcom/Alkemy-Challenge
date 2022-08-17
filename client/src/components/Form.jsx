import { useState } from "react";
import finance from "../assets/finance_app.svg";
import style from "../styles/Form.module.css";

const Form = () => {
  const [isUser, setIsUser] = useState(true);

  const handleUser = () => setIsUser((prevIsUser) => !prevIsUser);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <figure className={style.figure}>
          <img className={style.img} src={finance} alt="Finance App" />
        </figure>

        <form className={style.form}>
          <h2>{isUser ? "Iniciar sesión" : "Registrate"}</h2>
          {!isUser && (
            <input 
              className={style.input} type="text" placeholder="Nombre" autoComplete="given-name"
            />
          )}

          <input
            className={style.input} type="email" placeholder="Email" autoComplete="email"
          />

          <input
            className={style.input} type="password" placeholder="Contraseña" autoComplete={isUser ? "current-password" : "new-password"}
          />

          {!isUser && (
            <input
              className={style.input} type="password" placeholder="Confirmar contraseña" autoComplete="new-password"
            />
          )}

          <button className={style.btn} type="submit">
            {isUser ? "Iniciar sesión" : "Registrate"}
          </button>

          <p className={style.p} onClick={handleUser}>
            {isUser
              ? "¿No tenés cuenta? ¡Registrate!"
              : "¿Ya tenés cuenta? Inicía sesión"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
