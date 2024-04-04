import React from 'react'
import Cards from './Cards'

export default function Herramientas() {
  return (
    <div className="overflow-x-hidden shadow-xl bg-azulParticipa md:p-8">
      <div className=" flex justify-center items-center w-screen h-[950px] overflow-hidden left-0 bg-azulParticipa flex-col">
          <div className='h-[20%] flex justify-center items-center'>
          <h1 className='text-6xl font-bold'>Herramientas innovadoras.</h1>

          </div>
          <div className='h-[80%]'>

          <Cards></Cards>
          </div>
      </div>
    </div>
  )
}
