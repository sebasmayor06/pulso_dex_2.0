"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Cohete() {
  const [anchoVentana, setAnchoVentana] = useState(0);

  useEffect(() => {
    function handleResize() {
      setAnchoVentana(window.innerWidth);
    }
    setAnchoVentana(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="overflow-x-hidden shadow-xl bg-white md:p-8">
      <div className=" flex justify-center items-center w-screen h-screen md:h-[500px] overflow-hidden left-0 bg-white flex-col">
        {anchoVentana > 600 ? (
          <div
            className="bg-cover bg-center h-96 w-[1000px] rounded-3xl flex justify-center items-start flex-col"
            style={{ backgroundImage: "url('/cohete.png')" }}
          >
            <div className="pl-12 pb-12">
              <h1 className=" text-5xl font-extrabold">Asegura tu éxito.</h1>
              <h1 className="text-5xl font-extrabold">Conviértete en</h1>
              <h1 className=" text-5xl font-extrabold">
                <span
                  className="text-verdeButtom"
                  style={{ "text-shadow": "2px 2px 4px rgba(0, 0, 0, 1)" }}
                >
                  franquiciado{" "}
                </span>
                hoy.
              </h1>
            </div>
            <div className="flex justify-center items-center w-1/2 ">
              <button className="p-4 bg-inherit border-4 border-black rounded-full hover:bg-verdeButtom hover:bg-opacity-40 font-bold ">
                <a href="/Franquicia">Comprar Franquicia</a>
              </button>
            </div>
          </div>
        ) : (
          <div
            className="bg-cover bg-center h-[700px] md:h-96 w-[300px] rounded-3xl flex justify-start items-center flex-col"
            style={{ backgroundImage: "url('/cohete2.png')" }}
          >
            <div className=" m-12 w-full text-center">
              <h1 className=" text-3xl font-extrabold">Asegura tu éxito.</h1>
              <h1 className="text-3xl font-extrabold">Conviértete en</h1>
              <h1 className=" text-3xl font-extrabold">
                <span
                  className="text-verdeButtom"
                  style={{ "text-shadow": "2px 2px 4px rgba(0, 0, 0, 1)" }}
                >
                  franquiciado{" "}
                </span>
                hoy.
              </h1>
            </div>
            <div className="flex justify-center items-center w-full ">
              <button className="p-4 bg-inherit border-4 border-black rounded-full hover:bg-verdeButtom hover:bg-opacity-40 font-bold ">
                <a href="/Franquicia">Comprar Franquicia</a>
              </button>
            </div>

            <div>
              <Image src={"/Pattern.png"} width={300} height={300} alt="cohete"></Image>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
