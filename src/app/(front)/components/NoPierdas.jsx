import Image from 'next/image'
import React from 'react'

export default function NoPierdas({setShowModal2}) {
  return (
    <div className="overflow-x-hidden shadow-xl bg-white md:p-8">
      <div className=" flex flex-col md:flex-row w-screen h-[500px] md:h-700px overflow-hidden bg-white">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center gap-8 md:gap-0">
          <div className="w-[80%] flex justify-center items-center">
            <div className="grid grid-rows-2 gap-5 md:gap-0 w-full">
              <div className="md:p-4 text-4xl md:text-7xl font-semibold flex flex-col justify-center items-center">
              <span className='text-lilaBene'> ¡No pierdas </span>
               <span>más tiempo!</span>
              </div>
              <div className='flex md:ml-8 items-center w-full'>
              <span className="md:p-4 text-texto text-base md:text-2xl flex justify-center items-center">
              Únete a nosotros hoy mismo y sé parte de una experiencia única en el comercio electrónico.
              </span>
              </div>
            </div>
          </div>
          <button
              onClick={() => setShowModal2()}
              className="bg-black rounded-lg text-sm md:text-xl font-bold text-white p-2 hover:bg-verdeButtom hover:text-black w-44 h-16 md:w-64 md:h-20 rounded-l-full rounded-r-full"
            >
              Agendar Demo
            </button>
            <p className='text-texto mx-3.5 md:m-10 text-center'>Más de 10,000,000 de ventas se facturaron el año pasado en Colombia.</p>
        </div>
        <div className="hidden md:w-1/2 md:h-full md:flex md:justify-center md:items-center md:relative">
        
        <div className=' md:w-full md:h-full md:flex md:justify-center md:items-center '>
        <Image
            src="/mujerTarjeta.png"
            alt="logo"
            width={600}
            height={600}
            className="rounded-[10%] md:w-[600px] w-[320px] md:h-[600px] h-[340px] ml-5 md:ml-0"
            />
        </div>
        </div>
            </div>

    </div>
  )
}
