import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-azulOscuroInicio h-1/2 w-full flex md:flex-row flex-col-reverse gap-12 md:gap-0 justify-between items-center md:items-start p-10">
      <div className="flex flex-col justify-between items-center gap-5 md:gap-10">
        <Image src="/Group9.png" alt="Logo" width={150} height={150}></Image>
        <div className="flex items-center flex-row h-full">
          <FaRegCopyright />
          <p className="pl-2">Todos los derechos reservados</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 md:gap-32">
        <ul>
          <li className="text-gray-500  pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            INICIO{" "}
          </li>
          <li className="text-gray-500 pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            NOSOTROS{" "}
          </li>
          <li className="text-gray-500  pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            AYUDA{" "}
          </li>
        </ul>
        <ul>
          <a href="/Soluciones" className="text-gray-500  pb-2 font-semibold hover:text-blue-600 cursor-pointer">
            SOLUCIONES
          </a>
        </ul>
        <ul className="flex  items-center flex-col">
          <p className="text-gray-500  pb-2 font-semibold text-xl">Síguenos</p>
          <div className="flex gap-6 pb-5">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
            <FaTiktok className="text-2xl cursor-pointer hover:text-teal-400" />
          </div>
        </ul>
      </div>
    </div>
  );
}
