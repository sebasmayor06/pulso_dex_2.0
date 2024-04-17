import React from "react";
import { datos } from "../utils/datoPrimero";

const Politica = () => {
  const agregarEtiquetas = (texto) => {
    return texto.replace(
      /(https?:\/\/\S+)|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g,
      (match) => {
        if (match.startsWith("http")) {
          return `<u><a href="${match}" target="_blank">${match}</a></u>`;
        } else if (match.includes("@")) {
          return `<u><a href="mailto:${match}">${match}</a></u>`;
        } else {
          return match;
        }
      }
    );
  };

  return (
    <div className=" politica-container">
      <div className=" politica-container_children">
        <h2 className=" title-secundary  pb-4">
          Política de privacidad de la interfaz de Pulso Dex
        </h2>
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

export default Politica;

//

//

//

//

//
