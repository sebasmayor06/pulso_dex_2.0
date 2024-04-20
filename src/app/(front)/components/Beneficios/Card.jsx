'use client'
import Image from "next/image";
import React, { useState } from "react";

export default function Card({ img, parrafo, color, title, color_img, color_test, color_parrafo}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`md:w-full w-80 h-80 border-2 border-black rounded-xl flex flex-col ${color} p-4 gap-5 cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered ? "5px 5px 20px rgba(0, 0, 0, 0.5)" : "0px 1px 10px rgba(0, 0, 0, 0.3)",
        transform: hovered ? "translateY(-0.5%)" : "none"
      }}
    >
      <div>
        <div className={`${color_img} rounded-full w-[75px] h-[75px] flex justify-center items-center`}>
          <Image src={img} alt="logo" width={30} height={30} />
        </div>
      </div>
      <div>
        <div className={`flex flex-col gap-2`}>
          <h1 className={`font-extrabold text-xl ${color_test}`}>{title}</h1>
          <p className={`text-base ${color_parrafo}`}>{parrafo}</p>
        </div>
      </div>
    </div>
  );
}

