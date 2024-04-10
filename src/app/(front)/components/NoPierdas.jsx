import Image from 'next/image'
import React from 'react'

export default function NoPierdas({setShowModal2}) {
  return (
    <div className="overflow-x-hidden shadow-xl bg-azulInicio md:p-8">
      <div className="inicio flex flex-col md:flex-row w-screen h-screen md:h-700px top-67px overflow-hidden left-0 bg-azulInicio">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-8 md:gap-0">
          <div className="w-[80%] flex justify-center items-center">
            <p className="grid grid-rows-2 gap-5 md:gap-0">
              <span className="md:p-4 text-4xl md:text-7xl font-semibold">
              ¡No pierdas más tiempo!
              </span>
              <span className="md:p-4 text-texto text-base md:text-2xl">
              Únete a nosotros hoy mismo y sé parte de una experiencia única en el comercio electrónico.
              </span>
            </p>
          </div>
          <button
              onClick={() => setShowModal2()}
              className="bg-black rounded-lg text-sm md:text-xl font-bold text-white p-2 hover:bg-white hover:text-black w-44 h-16 md:w-64 md:h-20 rounded-l-full rounded-r-full"
            >
              Agendar Demo
            </button>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative">
        
        <div className='w-full h-full'>
        <Image
            src="/mujerTarjeta.png"
            alt="logo"
            width={600}
            height={600}
            className="rounded-[10%] md:w-[600px] w-[340px] md:h-[600px] h-[380px] ml-5 md:ml-0"
            />
        </div>
        </div>
            </div>

    </div>
  )
}
