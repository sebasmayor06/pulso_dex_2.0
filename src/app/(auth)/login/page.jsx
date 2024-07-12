"use client";
import Image from "next/image";
import { Gmail, Password } from "../utils/svg";
import { LogoWhite } from "../utils/svg";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import Register from "../components/register";
import { loginSchema } from "../../../validations/usersSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [modalRegister, setModalRegister] = useState(false);
  const modalRef = useRef();
  const [loading, setLoading] = useState(false); // Estado para controlar la carga
  const [error, setError] = useState(null);

  const closeModalRegister = () => setModalRegister(false);
  const handleModalRegister = () => setModalRegister(true);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true); // Activar carga al iniciar el envío del formulario

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión");
    } finally {
      setLoading(false); // Desactivar carga al finalizar la solicitud
    }
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModalRegister();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className={`flex justify-center items-center h-screen relative`}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-28 h-full">
        <div className="hidden md:block">
          <div className="flex justify-center md:w-[30rem] xl:w-[40rem]  h-full p-10 relative ">
            <div className="absolute left-20 top-20">
              <div className="flex items-center">
                <div
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: LogoWhite }}
                />
                <h1 className="font-semibold text-2xl pl-1 text-white">
                  Pulsodex
                </h1>
              </div>
            </div>
            <Image
              src="/sign-in.png"
              className="object-cover  rounded-[20px] md:block hidden"
              alt="logo"
              width={500}
              height={500}
              priority
            />

            <div className="absolute bottom-32 left-20 w-56">
              <p className="text-2xl text-white font-semibold">
                Conviértete en importador.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={onSubmit}
            className="md:min-w-[25rem] max-w-md mx-auto bg-white shadow-md  px-12 pt-6 pb-8 mb-4 rounded-xl"
          >
            <h1 className="text-[#232859] pb-8 text-3xl font-bold">
              Iniciar sesión
            </h1>
            <div className="flex flex-col mb-6">
              <div className=" flex items-center relative">
                <div
                  className="absolute pl-2"
                  dangerouslySetInnerHTML={{ __html: Gmail }}
                />
                <input
                  type="text"
                  id="email"
                  className="inputForm focus:outline-none focus:shadow-outline"
                  placeholder="Correo electrónico"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <div className=" flex items-center relative">
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
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex mb-6 items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="text-[#9CA3C1]">
                Recordarme
              </label>
            </div>
            <div className="pb-2">
              <p className="text-xs text-center text-red-500 mt-1">{error}</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#48D64C] hover:bg-[#2d8830] text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
                disabled={loading} // Deshabilitar botón mientras carga
              >
                {loading ? "Cargando..." : "Iniciar sesión"}{" "}
              </button>
            </div>

            <div className="mt-3 flex items-center justify-center">
              <p className="text-[#00000082]">
                ¿No tienes una cuenta?{" "}
                <button
                  onClick={handleModalRegister}
                  className="text-[#07B464]"
                  type="button" // Agregado type="button" para evitar envío del formulario
                >
                  Registrarse
                </button>{" "}
              </p>{" "}
            </div>
          </form>
        </div>
      </div>
      {modalRegister && (
        <div className="absolute inset-0 flex items-center justify-center  backdrop-blur-sm bg-[#ffffff61] w-full h-full z-10">
          <div ref={modalRef}>
            <Register closeModal={closeModalRegister} />
          </div>
        </div>
      )}
    </div>
  );
}
