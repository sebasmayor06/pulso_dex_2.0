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
      <div className="inicio flex flex-col md:flex-row w-screen h-[950px] md:h-screen top-[67px] overflow-hidden left-0 bg-white">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative">
          <div className="relative">
            <Image
              src="/hombre.png"
              alt="logo"
              width={600}
              height={600}
              className="rounded-[10%] md:w-[600px] w-96"
            />
            <h1 className="text-5xl md:text-7xl font-semibold absolute md:top-[370px] top-[250px] left-8 md:left-16 z-10 w-10 text-white">
              Retail Investor
            </h1>
            <button
              onClick={() => setShowModal2()}
              className="bg-azulInicio rounded-lg font-semibold text-black p-2 hover:bg-white hover:text-black w-32 h-12 md:w-64 md:h-20 text-xs md:text-xl rounded-l-full rounded-r-full absolute md:bottom-16 bottom-8 left-8 md:left-16 z-10"
            >
              Agendar Demo
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col md:mt-0 mt-8 md:mb-0 mb-10 gap-5">
          <div className="h-1/2 flex justify-center items-center">
            <div
              className={`bg-azulParticipa rounded-[50px] ml-[60px] md:ml-9 w-[80%] h-52 md:h-80 flex justify-center items-center ${
                inView
                  ? "animate-fade-left animate-once animate-ease-linear animate-normal animate-fill-forwards"
                  : "hidden"
              }`}
            >
              <p className="grid grid-rows-2 ">
                <span className="p-4 md:text-4xl text-2xl font-semibold">
                  Participa y genera utilidades por ventas.
                </span>
                <span className="md:p-4 pl-4 md:text-xl text-sm">
                  Un retail investor es aquel que aporta determinada cantidad de
                  capital para el desarrollo de una actividad a cambio de
                  beneficios económicos.
                </span>
              </p>
            </div>
          </div>
          <div
            className={`bg-aguaMarina md:ml-0 ml-2 rounded-[50px] w-[80%] h-52 md:h-80 flex justify-center items-center ${
              inView
                ? "animate-fade-right animate-once animate-ease-linear animate-normal animate-fill-forwards"
                : "hidden"
            }`}
          >
            <p className="grid grid-rows-2 ">
              <span className="p-4 md:text-4xl text-2xl font-semibold">
                ¿Qué hacemos con el capital?
              </span>
              <span className="md:p-4 pl-4 md:text-xl text-sm">
                Tu capital se usa para el desarrollo de nuestro e-commerce y la
                importación de productos directamente desde la fabrica.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
