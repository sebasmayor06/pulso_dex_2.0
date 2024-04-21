import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Retail({ setShowModal2 }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: true, // Para que la animación se dispare una sola vez
  });
  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-white md:p-8 mt-8">
      <div className="inicio flex flex-col-reverse md:flex-row w-screen h-[950px] md:h-screen top-[67px] overflow-hidden left-0 bg-white">
        <div className="w-full md:w-1/2 h-[60%] md:h-full flex flex-col md:mt-0 mt-8 md:mb-0 mb-10 gap-5">
          <div className="h-20% flex justify-center items-start flex-col pl-4 pr-4">
            <h1 className="text-4xl md:text-6xl font-semibold ">
              Pulso Partner
            </h1>
            <p className="text-texto text-base md:text-2xl">
              Pulso Dex busca socios activos y comprometidos que deseen formar
              parte de nuestra marca en el mundo del comercio electrónico.
            </p>
          </div>
          <div className="h-[80%] gap-2 flex flex-col justify-center items-center">
            <div className="h-[40%] flex justify-start items-center ">
              <div
                className={`bg-azulParticipa rounded-xl md:rounded-3xl m-2 w-[100%] md:w-[60%] h-44 md:h-50  ${
                  inView
                    ? "animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-forwards"
                    : "hidden"
                }`}
              >
                <div className="flex justify-center items-center flex-col p-5 w-full h-full">
                  <span className="md:text-2xl text-xl font-bold">
                    Compra nuestra franquicia.
                  </span>
                  <span className="md:p-4 p-2 md:text-base text-sm">
                    Conviértete en Partner comprando nuestra franquicia, con
                    beneficios únicos de forma automatizada.
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[40%] flex justify-end items-center ">
              <div
                className={`bg-aguaMarina md:ml-0 m-2 rounded-xl md:rounded-3xl w-[100%] md:w-[60%] h-44 md:h-50  ${
                  inView
                    ? "animate-fade-left animate-once animate-ease-linear animate-normal animate-fill-forwards"
                    : "hidden"
                }`}
              >
                <div className="flex justify-center items-center flex-col p-5 w-full h-full"> 
                <span className="md:text-2xl text-xl font-bold">
                  ¿Qué hacemos con el capital?
                </span>
                <span className="md:p-4 p-2 md:text-base text-sm">
                  Tu capital se usa para el desarrollo de nuestro e-commerce y
                  la importación de productos directamente desde la fabrica.
                </span>
                </div>
              </div>
            </div>
            <div className="h-[20%]">

            <button
              onClick={() => setShowModal2()}
              className="bg-black rounded-lg font-bold text-white p-2 hover:bg-verdeButtom hover:text-black w-32 h-12 md:w-64 md:h-20 text-xs md:text-xl rounded-l-full rounded-r-full"
              >
              Unirme ahora
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40%] md:h-full flex justify-center items-center relative">
          <div className="relative">
            <Image
              src="/hombre.png"
              alt="logo"
              width={600}
              height={600}
              className="rounded-3xl md:w-[500px] w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
