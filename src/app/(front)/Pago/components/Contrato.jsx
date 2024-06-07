import React from "react";
import { Ticket } from "../utils/icons";

export const Contrato = () => {
  return (
    <div className="p-2">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-5 ">Contrato</h2>
        <div className=" border divide-y border-color-white py-4 rounded-xl">
          <section className="flex items-center gap-4 ">
            <div className="flex items-center gap-4 p-4">
              <div className="relative w-32 h-20 bg-[#B9CEFF]  flex justify-center items-center rounded-lg drop-shadow-lg">
                <div className="text-xl font-bold w-full h-full flex justify-center items-center">
                  <span>Contrato</span>
                </div>
                <span className="absolute -top-2 -right-2  rounded-l-full rounded-r-full bg-white w-8 h-5 text-center border">
                  1
                </span>{" "}
              </div>
              <div className="mt-2">
                <h2 className="text-lg font-semibold mb-2">
                  Contrato de compra de Franquicia Pulso Dex
                </h2>
                <p className="flex items-center">
                  Archivo PDF:{" "}
                  <span className="ml-1 text-blue-500 cursor-pointer">Ver</span>
                </p>
              </div>
            </div>
          </section>
          <section className="flex items-center gap-4">
            <div className="flex items-center gap-4 p-4">
              <div className="relative w-32 h-20 bg-[#B9CEFF]  flex justify-center items-center drop-shadow-lg rounded-lg">
                <div className="text-xl font-bold w-full h-full flex justify-center items-center">
                  <span>Contrato</span>
                </div>
                <span className="absolute -top-2 -right-2  rounded-l-full rounded-r-full bg-white w-8 h-5 text-center border">
                  1
                </span>
              </div>
              <div className="mt-2">
                <h2 className="text-lg font-semibold mb-2">
                  Contrato de compra de Franquicia Pulso Dex
                </h2>
                <p className="flex items-center">
                  Archivo PDF:{" "}
                  <span className="ml-1 text-blue-500 cursor-pointer">Ver</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Código de referido</h2>
        <div className="relative flex items-center">
          <div className="absolute pl-2" dangerouslySetInnerHTML={{ __html: Ticket }} />

          <input
            type="text"
            className="border-2 border-[#4B7DF3] rounded-xl px-4 py-2 w-full"
          />
          <span className="absolute right-2">Aplicar</span>
        </div>
      </div>
    </div>
  );
};
