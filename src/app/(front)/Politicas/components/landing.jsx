"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import style from "../../Soluciones/style.module.css";

export default function PoliticasPage() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: false, // Para que la animación se dispare una sola vez
  });
  return (
    <div
      ref={ref}
      className={`overflow-x-hidden shadow-xl bg-azulInicio ${style.bg2} mb-8`}
    >
      <div
        className={`flex justify-center items-center w-screen h-screen overflow-hidden left-0 bg-inherit`}
      >
        <div className="flex flex-col gap-5">
          <h1
            className={` title-primary  animate-fade-right ${
              inView ? "animate-once animate-duration-500 animate-ease-in" : ""
            }`}
          >
            Política de Privacidad
          </h1>
        </div>
      </div>
    </div>
  );
}
