import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Beneficios() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: false, // Para que la animación se dispare una sola vez
  });
  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-azulInicio">
      <div className="inicio flex flex-col-reverse md:flex-row w-screen md:h-screen h-[950px] top-67px overflow-hidden left-0 bg-azulInicio md:p-16">
      <div className="w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center relative">
            <Image
              src="/celular.png"
              alt="logo"
              width={500}
              height={500}
              className="rounded-[10%] md:w-[450px] w-[300px] md:h-[600px] h-[400px]"
            />
        </div>
        <div className="w-full md:w-[55%] h-1/2 md:h-full flex flex-col ">
          <div className="h-1/2 flex justify-center items-center">
            <span className="md:p-4 text-5xl md:text-7xl font-bold md:font-semibold w-60 md:w-32">
              Beneficios Exclusivos
            </span>
          </div>
          <div className="h-1/2 m-3 md:m-10">
            <div className="grid grid-cols-2 gap-3">
                    <div className={`md:h-24 w-full h-16 border-4 rounded-full border-black flex flex-row gap-3 justify-center items-center ${inView?'animate-jump-in animate-duration-1000 animate-delay-[100ms] animate-normal':'hidden'} `}> 
                    <Image 
                        src="/linea.png"
                        alt="logo"
                        width={60}
                        height={60}
                        className="rounded-[10%] w-10 h-10 md:w-[60px] md:h-[60px]"
                        />
                        <span className="font-bold text-xs md:text-lg overflow-hidden">Datos y Análisis</span>
                    </div>
                    <div className={`md:h-24 w-full h-16 border-4 rounded-full border-black flex flex-row gap-3 justify-center items-center ${inView?'animate-jump-in animate-duration-1000 animate-delay-[200ms] animate-normal':'hidden'} `}> 
                    <Image 
                        src="/estrella.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-[10%] ml-5"
                        />
                        <span className="font-bold text-xs md:text-lg overflow-hidden w-40">Utilidades Semestrales</span>
                    </div>
                    <div className={`md:h-24 w-full h-16 border-4 rounded-full border-black flex flex-row gap-3 justify-center items-center ${inView?'animate-jump-in animate-duration-1000 animate-delay-[300ms] animate-normal':'hidden'} `}> 
                    <Image 
                        src="/proh.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-[10%] w-9 h-9 md:w-[50px] md:h-[50px]"
                        />
                        <span className="font-bold text-xs md:text-lg overflow-hidden">Usted no vende</span>
                    </div>
                    <div className={`md:h-24 w-full h-16 border-4 rounded-full border-black flex flex-row gap-3 justify-center items-center ${inView?'animate-jump-in animate-duration-1000 animate-delay-[400ms] animate-normal':'hidden'} `}> 
                    <Image 
                        src="/Group.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-[10%] ml-5"
                        />
                        <span className="font-bold text-xs md:text-lg overflow-hidden w-40">Contrato y Certificado</span>
                    </div>
                    <div className={`md:h-24 w-full h-16 border-4 rounded-full border-black flex flex-row gap-3 justify-center items-center ${inView?'animate-jump-in animate-duration-1000 animate-delay-[600ms] animate-normal':'hidden'} `}> 
                    <Image 
                        src="/grafica.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="rounded-[10%] ml-7"
                        />
                        <span className="font-bold text-xs md:text-lg overflow-hidden w-44">Acceso a informes de ventas</span>
                    </div>
                   

                    
                    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
