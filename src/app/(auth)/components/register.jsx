"use client";
import { useState } from "react";
import { Gmail, Inversion, Password, Username } from "../utils/svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../validations/usersSchema";
import Link from "next/link";

const PageRegister = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const totalAmout = Number(data.totalAmout);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: data.name,
          email: data.email,
          password: data.password,
          totalAmout: totalAmout,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res, "res");
      if (res.ok) {
        closeModal();
      } else {
        if (res.status === 500) {
          setError("El usuario ya existe");
        } else {
          setError("Completar todos los campos");
        }
      }
    } catch (error) {
      setError("Error al registrar usuario");
    } finally {
      setLoading(false);
    }
  });
  return (
    <div className={`$ flex justify-center  items-center w-full h-full py-4`}>
      <form
        action=""
        onSubmit={onSubmit}
        className="max-w-md border  border-[#ffffff8e] my-2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-[#232859] pb-8 text-3xl font-bold">Registrate</h1>
        <div className="mb-6 ">
          <div className="flex items-center mb-1">
            {/* <label htmlFor="name">Nombre</label> */}
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Username }}
            />
            <input
              type="text"
              id="name"
              className="inputForm focus:outline-none focus:shadow-outline "
              placeholder="Nombre Completo"
              {...register("name")}
            />
          </div>
          {errors.name?.message && (
            <p className="text-xs text-red-500 text-wrap w-[16.8rem]">
              {errors.name?.message}
            </p>
          )}
        </div>

        <div className="mb-6 ">
          <div className=" flex items-center mb-1">
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Gmail }}
            />
            <input
              type="text"
              id="email"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Correo electronico"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mb-6 ">
          <div className=" flex items-center mb-1">
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Password }}
            />
            <input
              type="password"
              id="password"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="mb-6 ">
          <div className="flex items-center mb-1">
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Password }}
            />
            <input
              type="password"
              id="confirmPassword"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword")}
            />
          </div>
          {errors.confirmPassword?.message && (
            <p className="text-xs text-red-500 w-[16.8rem]">
              {errors.confirmPassword?.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-1">
            <div
              className="absolute pl-2"
              dangerouslySetInnerHTML={{ __html: Inversion }}
            />
            <input
              type="number"
              id="totalAmout"
              className="inputForm focus:outline-none focus:shadow-outline"
              placeholder="Ingrese cantidad de inversión"
              {...register("totalAmout")}
            />
          </div>
        </div>

        <p className="text-xs text-red-500 text-wrap w-[16.8rem] pb-2">
          {error}
        </p>

        <div className="flex items-center mb-1 justify-between">
          <button
            type="submit"
            className="bg-[#48D64C] hover:bg-[#2d8830] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
          >
            {loading ? "Cargando..." : "Registrarme"}{" "}
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center">
          <button onClick={closeModal}>
            <p className="text-[#00000082]">
              ¿No tienes una cuenta?{" "}
              <Link href="/login" className="text-[#6749D6]">
                Iniciar sesión
              </Link>{" "}
            </p>{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PageRegister;
