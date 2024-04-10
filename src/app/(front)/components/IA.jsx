import Image from "next/image";
import React from "react";

export default function IA({setShowModal2}) {
  return (
    <div className="overflow-x-hidden shadow-xl bg-white md:p-8">
      <div className="inicio flex flex-col md:flex-row w-screen md:h-screen h-[850px] overflow-hidden left-0 bg-white">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-8 md:gap-0">
          <div className="w-[80%] flex justify-center items-center">
            <p className="grid grid-rows-2">
              <span className=" text-4xl md:text-7xl font-semibold text-center md:text-left">
                Usamos Inteligencia Artificial
              </span>
              <span className="pt-4 text-texto text-base md:text-2xl">
                La inteligencia artificial es nuestra aliada para seleccionar
                cuidadosamente los mejores productos, garantizando una
                experiencia excepcional para ti.
              </span>
            </p>
          </div>
          <button
            onClick={() => setShowModal2()}
            className="border-2 backdrop:blur bg-verdeButtom text-sm md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20"
          >
            Agendar Demo
          </button>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative">
          <div className="relative">
            <Image
              src="/hombreAzul.png"
              alt="logo"
              width={500}
              height={50}
              className="rounded-[10%] md:w-[450px] w-[340px] md:h-[600px] h-[410px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
