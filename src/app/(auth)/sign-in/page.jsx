"use client";
import Image from "next/image";
import { useState } from "react";
import { Gmail, Password } from "../utils/svg";
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
      <div className="grid grid-cols-2 gap-40 h-full">
        <div>
          <div className="flex justify-center w-[30rem] h-full p-10 ">
            <Image
              src="/sign/sign-in.png"
              alt="Imagen de desarrollo"
              width={600}
              height={600}
              className="object-cover  rounded-[20px]"
            />
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
           
            <div className="mb-4 flex items-center">
              <div className="absolute" dangerouslySetInnerHTML={{ __html: Gmail }} />
              <input
                type="email"
                id="email"
                placeholder="correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 flex items-center">
              <div className="" dangerouslySetInnerHTML={{ __html: Password }} />
              <input
                type="text"
                id="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#48D64C] hover:bg-[#2d8830] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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
