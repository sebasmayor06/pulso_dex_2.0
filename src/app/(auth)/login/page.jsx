"use client";
import Image from "next/image";
import { Gmail, Password } from "../utils/svg";
import { LogoWhite } from "../utils/svg";
import { Social } from "../components/social";
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

  const handleModalRegister = () => setModalRegister(true);
  const closeModalRegister = () => setModalRegister(false);

  const onSubmit = handleSubmit(async (data) => {
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
  }, [closeModalRegister]);

  return (
    <div className={`flex justify-center items-center h-screen relative`}>
      <div className="grid grid-cols-2 gap-28 h-full">
        <div>
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
            <img
              src="https://img.freepik.com/foto-gratis/mujer-negocios-dandole-mano-hombre_23-2148252077.jpg?t=st=1718053444~exp=1718057044~hmac=c419049ede1ed82375a048bc8b5f568d79c9e6e53b15357e9003100d5816065f&w=826"
              alt="Imagen de desarrollo"
              width={600}
              height={600}
              className="object-cover  rounded-[20px]"
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
              Iniciar seción
            </h1>

            <div className="mb-6 flex items-center">
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
              {errors.name?.email && (
                <p className="text-xs text-red-500 text-wrap w-[16.8rem]">
                  {errors.name?.email}
                </p>
              )}
            </div>
            <div className="mb-6 flex items-center">
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
            <div className="flex mb-6 ">
              <input type="checkbox" name="" placeholder="recordarme" id="" />
              <h3 className="text-[#9CA3C1] pl-[.7rem]">Recordarme</h3>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#48D64C] hover:bg-[#2d8830] text-white  py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
              >
                Iniciar sesión
              </button>
            </div>

            <Social />
            <div className="mt-3 flex items-center justify-center">
              <p className="text-[#00000082]">
                ¿No tienes una cuenta?{" "}
                <button
                  onClick={handleModalRegister}
                  className="text-[#07B464]"
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
