"use client"
import Image from "next/image";
import { useEffect, useState } from 'react';

const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div className="flex flex-col items-center h-full ">
            <div className=" w-full relative">
                <div className=" bg-gradient-nosotros-landing-fondo flex justify-center xl:pt-24 md:pt-16">
                    <div className="rounded-full w-[32rem] h-[32rem] bg-white">
                    </div>
                    <h1
                        className={`absolute md:text-6xl md:font-extrabold inset-0 flex justify-center items-center z-10 text-center text-[#292930] ${isVisible ? 'animate-slideInUp opacity-100' : 'opacity-0'
                            }`}
                    >
                        El Im-Pulso que necesitas
                    </h1>
                </div>
                <div className="absolute bottom-0 w-full ">
                    <div className="flex  justify-center items-center h-full w-full bg-black ">
                        <p className=" text-white lg:text-xl md:text-sm  w-[50rem] py-14">
                            Una plataforma integral de comercio electrónico impulsada por
                            inteligencia artificial, diseñada para automatizar y potenciar
                            ventas de manera eficiente y efectiva.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing