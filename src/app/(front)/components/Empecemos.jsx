"use client"
import React, { useState} from "react";
import { useInView } from "react-intersection-observer";



export default function Empecemos({setShowModal2}) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: false, // Para que la animación se dispare una sola vez
  });
    const [numero, setNumero] = useState(1);

    const handleNumero = (value) => {
        setNumero(value)
    }


  return (
    <div ref={ref} className=" border-b-2 border-gray-400 shadow-xl">

    <div className="flex justify-center items-center flex-col p-32 relative">
      <h1 className="text-4xl md:text-7xl font-bold mb-5 ">Empecemos</h1>
      <div className="flex justify-center items-center flex-col relative">
        <span className="text-sm text-texto md:text-xl w-[350px] md:w-[500px]">
          Elija el ranking que quiere pertenecer, envíe todos los requisitos y
          consiga ganancias de hasta un 25%.
        </span>
        <div className="grid grid-cols-5 mt-8 z-10 gap-1">
          <button onClick={() => handleNumero(1)} className={`border-2 backdrop:blur rounded-full bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-16 md:w-24 ${inView?'animate-jump animate-duration-1000 animate-delay-[10ms] animate-normal':''}`}>
            1M
          </button>
          <button onClick={() => handleNumero(3)} className={`border-2 backdrop:blur rounded-full bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-16 md:w-24 ${inView?'animate-jump animate-duration-1000 animate-delay-[10ms] animate-normal':''}`}>
            3M
          </button>
          <button onClick={() => handleNumero(5)} className={`border-2 backdrop:blur rounded-full bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-16 md:w-24 ${inView?'animate-jump animate-duration-1000 animate-delay-[10ms] animate-normal':''}`}>
            5M
          </button>
          <button onClick={() => handleNumero(10)} className={`border-2 backdrop:blur rounded-full bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-16 md:w-24 ${inView?'animate-jump animate-duration-1000 animate-delay-[10ms] animate-normal':''}`}>
            10M
          </button>
          <button onClick={() => handleNumero(30)} className={`border-2 backdrop:blur rounded-full bg-gradient-to-r from-white/80 to-black/20 text-sm md:text-xl font-bold p-4 hover:bg-indigo-300 hover:bg-opacity-50 w-16 md:w-24 ${inView?'animate-jump animate-duration-1000 animate-delay-[10ms] animate-normal':''}`}>
            30M
          </button>
        </div>
        <div className="circulo w-[75px] md:w-[120px] h-[75px] md:h-[120px] bg-gradient-to-r from-white to-azulInicio rounded-[100%] absolute top-[-30%] md:top-[-40%] left-[80%] lg:left-[150%] xl:left-[160%] -translate-x-[50%] translate-y-[50%] z-0"></div>
        <div className="circulo w-[120px] md:w-[180px] h-[120px] md:h-[180px] bg-gradient-to-r from-white to-azulInicio rounded-[100%] absolute top-[15%] md:top-[10%] left-[80%] md:left-[100%] -translate-x-[50%] translate-y-[50%] z-0"></div>
        <div className="circulo w-[200px] md:w-[360px] h-[200px] md:h-[360px] bg-gradient-to-r from-white to-azulInicio rounded-[100%] absolute top-[25%] md:top-[30%] left-[30%] md:left-[-60%] -translate-x-[50%] translate-y-[50%] z-0"></div>
        <div className="border-2 border-gray-200 rounded-3xl p-4 m-4 z-10 w-[350px] md:w-[520px]">
          <table className="min-w-full divide-y divide-gray-200 mt-8 relative z-10 bg-white/50">
            <tbody className=" divide-y divide-gray-300">
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  Objetivo Utilidad
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs md:text-xl text-gray-500">
                  40%
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  Administración
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs md:text-xl text-gray-500">
                  30% de Participación
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold whitespace-nowrap text-sm md:text-xl text-gray-900">
                  E-commerce
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs md:text-xl text-gray-500">
                  30% de Ganancias
                </td>
              </tr>
            </tbody>
          </table>
        <div className="flex justify-center items-center mt-10 flex-col">
        <div className="numero text-black bg-verdeManzana bg-opacity-50 text-4xl rounded-l-lg font-bold w-16 md:w-24 justify-center flex items-center h-14 md:h-14">{`${numero}M`}</div>
        <button onClick={()=>setShowModal2()} className="border-2 backdrop:blur bg-verdeButtom text-sm md:text-xl font-bold p-4 md:p-3 rounded-full hover:bg-gray-400 hover:bg-opacity-50 w-64">Empezar</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
