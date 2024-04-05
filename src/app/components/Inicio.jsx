import Image from "next/image";
import React from "react";

export default function Inicio({setShowModal2}) {
  return (
    <div className="overflow-x-hidden shadow-xl bg-azulInicio md:p-8">
      <div className="inicio flex flex-col md:flex-row w-screen h-screen  top-67px overflow-hidden left-0 bg-azulInicio  gap-5 md:gap-0">
        <div className="flex flex-col justify-center items-center h-1/2 md:h-full md:w-1/2 w-full pl-4 pr-4">
          <div className="w-full h-1/2 flex justify-center items-center md:ml-14 md:mb-0 mb-10 md:mt-0 mt-10">
            <span className="text-4xl md:text-7xl font-bold text-center md:text-left">
              Descubre el potencial del Comercio electrónico.
            </span>
          </div>
          <div className="w-full h-1/2 flex md:flex-row flex-col justify-center items-center bg-azulOscuroInicio rounded-3xl p-10">
            <span className="md:text-2xl text-base md:p-8 font-medium">
            Explora un mundo de posibilidades y crecimiento con nuestra plataforma de inversión en comercio electrónico.
            </span>
            <button onClick={()=>setShowModal2()} className="bg-black rounded-lg text-white p-2 hover:bg-white hover:text-black w-40 h-12 md:w-96 md:h-16 rounded-l-full rounded-r-full">
                Agendar Demo
              </button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-1/2 md:h-full md:w-1/2 ">
          <Image
            src="/tarjeta_pc.png"
            alt="logo"
            width={600}
            height={600}
            className=" object-cover object-bottom rounded-tl-[15%] md:w-[600px] w-[370px] md:h-[600px] h-96"
          />
        </div>
      </div>
    </div>
  );
}
