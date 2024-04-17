import React from "react";
import { listDerechos } from "../utils/derechos";

export const Derechos = () => {
  return (
    <div className="politica-container">
      <div className="politica-container_children">
        <h2 className=" title-secundary text-4xl font-bold pb-4">
          Sus derechos en virtud de la ley de protección de datos personales
        </h2>
        <p>
          En determinadas circunstancias, usted puede tener una serie de
          derechos de privacidad relativos al uso, almacenamiento y tratamiento
          de sus Datos Personales (por ejemplo, el derecho a eliminar sus
          datos). He aquí una lista de derechos de privacidad:
        </p>
        <ul className="pb-8 list-disc ml-8">
          {listDerechos.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
        <p>
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
