import React from "react";
import { listDerechos } from "../utils/derechos";

const agregarEtiquetas = (texto) => {
  return texto.replace(
    /(https?:\/\/\S+)|(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)/g,
    (match) => {
      if (match.startsWith("http")) {
        console.log(match);
        return `<u><a href="${match}" target="_blank">${match}</a></u>`;
      } else if (match.includes("@")) {
        return `<u><a href="mailto:${match}">${match}</a></u>`;
      } else {
        return match;
      }
    }
  );
};

export const Derechos = () => {
  return (
    <div className="politica-container">
      <div className="politica-container_children">
        <h2 className=" title-secundary  pb-4">
          Sus derechos en virtud de la ley de protección de datos personales
        </h2>
        <p className="text-parrafo">
          En determinadas circunstancias, usted puede tener una serie de
          derechos de privacidad relativos al uso, almacenamiento y tratamiento
          de sus Datos Personales (por ejemplo, el derecho a eliminar sus
          datos). He aquí una lista de derechos de privacidad:
        </p>
        <ul className="pb-8 list-disc ml-8 text-parrafo">
          {/* {listDerechos.map((list, index) => (
            <li key={index}>{list}</li>
          ))} */}
           {listDerechos.map((text, index) => {
          const textoConEtiquetas = agregarEtiquetas(text);
          return (
            <li
              key={index}
              className="pb-4"
              dangerouslySetInnerHTML={{ __html: textoConEtiquetas }}
            />
          );
        })}
        </ul>
        <p className="text-parrafo">
          Envíe un correo electrónico a: info@pulsodex.com.co si tiene alguna
          pregunta sobre el ejercicio de cualquiera de los derechos anteriores.
          Si desea obtener más información sobre la protección de datos y sus
          derechos.
        </p>
      </div>
    </div>
  );
};

//
//
//
//
//
//
//
//
//

//
