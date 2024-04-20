'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import style from '../style.module.css'

export default function TituloAnimado() {
    const { ref, inView } = useInView({
        threshold: 0.5, // Personaliza este valor según tus necesidades
        triggerOnce: false, // Para que la animación se dispare una sola vez
      });
  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-azulInicio md:p-8">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center w-screen h-screen  overflow-hidden bg-azulInicio ">
        <div className={`${style.inicio} animate-fade-up animate-once animate-duration-3000 animate-delay-100 animate-ease-linear`}>
          <div className={style.container}>
            <div className={style.ring}></div>
            <div className={style.ring}></div>
            <div className={style.ring}></div>

          </div>

        </div>
        <div className='flex text-center flex-col md:w-[60%] w-[80%] h-1/2'>
        <h1 className={`font-bold text-5xl md:text-7xl animate-fade-left ${inView?'animate-once animate-duration-500 animate-ease-in':''}`}>
            <span className='text-verdeButtom' style={{'text-shadow': '2px 2px 4px rgba(0, 0, 0, 1)'}}>Importamos </span> productos y los
        </h1>
        <h1 className={`font-bold text-5xl md:text-7xl animate-fade-right ${inView?'animate-once animate-duration-500 animate-ease-in':''}`}>
        <span className='text-verdeButtom' style={{'text-shadow': '2px 2px 4px rgba(0, 0, 0, 1)'}}>vendemos</span> por ti.
        </h1>
        </div>
    </div>
    </div>
  )
}
