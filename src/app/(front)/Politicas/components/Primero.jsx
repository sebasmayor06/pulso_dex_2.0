import React from "react";
import { datos } from "../utils/datoPrimero";

const Primero = () => {
  const agregarEtiquetas = (texto) => {
    return texto.replace(
      /(https?:\/\/\S+)|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g,
      (match) => {
        if (match.startsWith("http")) {
          return `<a href="${match}" target="_blank">${match}</a>`;
        } else if (match.includes("@")) {
          return `<a href="mailto:${match}">${match}</a>`;
        } else {
          return match;
        }
      }
    );
  };

  return (
    <div className="flex justify-center py-16">
      <div className=" bg-azulParticipa p-12 md:max-w-[100rem]">
        <h1 className=" title-secundary text-4xl font-bold pb-4">
          Política de privacidad de la interfaz de Pulso Dex
        </h1>
        {datos.map((text, index) => {
          const textoConEtiquetas = agregarEtiquetas(text);
          return (
            <p
              key={index}
              className="pb-4"
              dangerouslySetInnerHTML={{ __html: textoConEtiquetas }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Primero;

//

//

//

//

//
