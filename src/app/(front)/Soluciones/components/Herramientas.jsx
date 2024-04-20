import React from "react";
import Cards from "./Cards";

export default function Herramientas() {
  return (
    <div className="overflow-x-hidden shadow-xl bg-azulParticipa ">
      <div className=" flex justify-center items-center w-screen h-[2300px] md:h-[950px] overflow-hidden left-0 bg-azulParticipa flex-col">
        <div className="h-[10%] md:h-[20%] w-full flex justify-center items-center">
          <h1 className="md:text-6xl text-4xl font-bold md:w-full w-[250px] text-center">
            Herramientas innovadoras.
          </h1>
        </div>
        <div className="h-[90%] md:h-[80%]">
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}
