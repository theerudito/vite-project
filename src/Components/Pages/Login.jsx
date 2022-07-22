import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { APIUSER } from "../helper/api";

export const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = async (data) => {
    const useData = await APIUSER(data);

    if (data.email === useData.user && data.password === useData.pass) {
      localStorage.setItem("users", JSON.stringify(useData));
      navigate("/home");
      window.location.reload();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="containerLogin">
        <form onSubmit={handleSubmit(form)}>
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
              placeholder="password"
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
