"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

const Vision = ({ description, title, image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const visionCartRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const bounding = visionCartRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const isVisible = bounding.top < windowHeight * 0.9;
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verifica la visibilidad inicial
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
        ref={visionCartRef}
             className={`flex flex-col justify-between items-center border-2 bg-[#424245] rounded-[50px]  p-8 hover:animate-pulse transition-opacity duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>

            <div className="mb-4 bg-[#292930] rounded-[100%] w-20 h-20 flex items-center justify-center">
                <Image
                    src={image}
                    alt="Imagen de la característica"
                    width={50}
                    height={50}
                />
            </div>
            <h2 className="text-xl text-white font-medium mb-2">{title}</h2>
            <p className="text-[#D0D0D0] text-center  md:text-xl  mb-8">{description}</p>
           
            <div className="border-b border-2 border-gray-400 w-16 rounded"></div>

        </div>
    );
}

export default Vision