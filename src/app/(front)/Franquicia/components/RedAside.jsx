import React from 'react'

const RedAside = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-24 bg-[#B9CEFF] py-32 w-full  flex flex-col justify-center items-center'>
                <h1 className="text-3xl text-center  md:text-6xl md:font-bold 
                            text-[#292930] pb-8">Tenemos la habilidad de adaptarnos al mercado.</h1>
                <button className="border-2 border-black backdrop:blur bg-verdeButtom text-sm md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20">
                    Cuéntanos de ti
                </button>
            </div>
        </div>
    )
}

export default RedAside