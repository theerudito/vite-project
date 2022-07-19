import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { APIUSER } from "../helper/api";

export const Login = () => {
  const navigate = useNavigate();
  const { mensaje, setMensaje } = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = async (data) => {
    const useData = await APIUSER({ data });
    console.log(useData);
    if (data.email === useData.user && data.password === useData.pass) {
      navigate("/home");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="containerLogin">
        <form onClick={handleSubmit(form)}>
          <div className="containerForm">
            <p>Inicio de Seccion</p>
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
              type="text"
              name="email"
              placeholder="example@gmail.com"
            />
            {errors.email?.type === "pattern" && (
              <p style={{ color: "red" }}>El Formato del Email es incorrecto</p>
            )}

            <label>Password</label>
            <input
              {...register("password", { required: true })}
              name="password"
              type="password"
              placeholder="12345"
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};