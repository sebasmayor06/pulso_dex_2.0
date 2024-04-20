import React from 'react'

const RedAside = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-24 bg-[#B9CEFF] md:py-32 py-16 w-full  flex flex-col justify-center items-center'>
                <h1 className=" title-secundary text-center text-[#292930] pb-8 md:px-0 ">Tenemos la habilidad de adaptarnos al mercado.</h1>
                <button  className="border-2 text-color-btn border-color-btn backdrop:blur bg-verdeButtom text-sm md:text-xl font-bold md:p-3 rounded-full w-44 h-16 md:w-64 md:h-20 transition-all duration-300 ease-in hover:bg-[#31e990df] hover:text-[#000000] hover:border-[#000000] ">
                    Cuéntanos de ti
                </button>
            </div>
        </div>
    )
}

export default RedAside