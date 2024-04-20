import Image from 'next/image'
import React from 'react'
import Cards from './Beneficios/Cards'

export default function Beneficios2() {
  return (
    <div  className="overflow-x-hidden shadow-xl bg-azulInicio">
      <div className="inicio flex flex-col gap-20 md:flex-col w-screen md:h-[1600px] h-[2500px] top-67px overflow-hidden left-0 bg-bgBene md:pt-16">
        <div className='flex justify-center items-center flex-col w-full h-[20%] md:h-[30%] md:mt-0 mt-10'>
            <h1 className='text-4xl md:text-6xl text-white font-bold'>
                Beneficios <span className='text-lilaBene'> Exclusivos </span>
            </h1>
            <Image
              src="/celular.png"
              alt="logo"
              width={500}
              height={500}
              className="rounded-[10%] md:w-[350px] w-[250px] md:h-[500px] h-[375px]"
            />
        </div>
        <div className='flex justify-start items-center flex-col w-full h-[45%] md:h-[30%] '>
            <Cards></Cards>
        </div>
        <div className='flex justify-center flex-col md:flex-row items-center w-full h-[10%] md:h-[20%] gap-y-6 md:gap-12 mt-64 md:mt-24'>
            <div className='flex flex-col justify-center items-center w-40'>
            <Image src='/lineaBlanca.png' alt="logo" width={35} height={35} />
            <h1 className='text-white md:text-xl text-xs'>Datos y análisis</h1>
            </div>
            <div className='border-white md:border-r-2 md:border-b-0 border-b-2 w-12 md:h-12'></div>
            <div className='flex flex-col justify-center items-center w-40'>
            <Image src='/GroupBlanco.png' alt="logo" width={30} height={30} />
            <h1 className='text-white md:text-xl text-xs'>Control contable</h1>
            </div>
            <div className='border-white md:border-r-2 border-b-2 w-12 md:h-12 md:border-b-0'></div>
            <div className='flex flex-col justify-center items-center w-40 gap-2 md:mt-8'>
            <Image src='/estrellaBlanca.png' alt="logo" width={30} height={30} />
            <h1 className='text-white text-center md:text-xl text-xs'>Acompañamiento y educación</h1>
            </div>
        </div>
    </div>
    </div>
  )
}
