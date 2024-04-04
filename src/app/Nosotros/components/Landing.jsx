"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';

const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-col items-center h-full">
            <div className=" w-full relative">
                <Image
                    src="/nosotros/banner.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-full z-0"
                />
                <h1
                    className={`absolute md:text-6xl md:font-medium bottom-[5rem] left-0 z-10 w-full text-center text-[#292930] ${isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'
                        }`}
                >
                    El Im-Pulso que necesitas
                </h1>
            </div>
            <div className="flex  justify-center items-center h-full w-full ">
                {/* <div className="bg-red-600"> */}
                <p className=" text-white lg:text-xl md:text-sm  w-[50rem] py-14">
                    Una plataforma integral de comercio electrónico impulsada por
                    inteligencia artificial, diseñada para automatizar y potenciar
                    ventas de manera eficiente y efectiva.
                </p>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Landing