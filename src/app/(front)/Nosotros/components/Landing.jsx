"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="flex flex-col items-center h-full ">
      <div className=" w-full h-screen relative">
        <div className=" bg-gradient-nosotros-landing-fondo flex justify-center items-end   xl:pt-24 md:pt-16 h-1/2 md:h-full">
          <div className="absolute md:block top-32  xs:top-48 md:top-28 z-0 rounded-full w-[10rem] h-[10rem]  xs:w-[16rem] xs:h-[16rem]  md:w-[32rem] md:h-[32rem] bg-red-500"></div>
          <h1
            className={`absolute top-1/4 md:top-16 text-4xl xs:text-5xl   md:text-6xl font-extrabold  inset-0 md:flex md:justify-center md:items-center z-10 text-center text-[#292930] ${
              isVisible ? "animate-slideInUp opacity-100" : "opacity-0"
            }`}
          >
            El Im-Pulso que necesitas
          </h1>
        </div>
        <div className="absolute bottom-0 w-full h-1/2 md:h-1/4">
          <div className="flex  justify-center items-center h-full w-full bg-black ">
            <p className=" text-white text-lg  xs:text-2xl text-center  w-[50rem] py-14 px-8">
              Una plataforma integral de comercio electrónico impulsada por
              inteligencia artificial, diseñada para automatizar y potenciar
              ventas de manera eficiente y efectiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
