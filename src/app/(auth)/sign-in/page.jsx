"use client";
import Image from "next/image";
import { useState } from "react";
import { Gmail, Password } from "../utils/svg";
import { LogoWhite } from "@/app/admin/(root)/utils/svg";
// import styles from "@/app/admin/(root)/components/SideNav.module.css";

export default function SignInPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a donde desees, como una API o una función de manejo de datos.
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    // Limpia el formulario después de enviar
    setPassword("");
    setEmail("");
    setMensaje("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-28 h-full">
        <div>
          <div className="flex justify-center md:w-[30rem] xl:w-[40rem]  h-full p-10 relative ">
            <div className="absolute left-20 top-20">
              <div className="flex items-center">
                <div dangerouslySetInnerHTML={{ __html: LogoWhite }} />
                <h1 className="font-semibold text-2xl pl-1 text-white">
                  Pulsodex
                </h1>
              </div>
            </div>
            <Image
              src="/sign/sign-in.png"
              alt="Imagen de desarrollo"
              width={600}
              height={600}
              className="object-cover  rounded-[20px]"
            />
            <div className="absolute bottom-32 left-20 w-56">
              <p className="text-2xl text-white font-semibold">Conviértete en importador.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                type="email"
                id="email"
                placeholder="correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputForm focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6 flex items-center">
              <div
                className="absolute pl-2"
                dangerouslySetInnerHTML={{ __html: Password }}
              />
              <input
                type="text"
                id="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="inputForm focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex mb-6 ">
              <input type="checkbox" name="" placeholder="recordarme" id="" />
              <h3 className="text-[#9CA3C1] pl-[.7rem]">Recordarme</h3>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#48D64C] hover:bg-[#2d8830] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
