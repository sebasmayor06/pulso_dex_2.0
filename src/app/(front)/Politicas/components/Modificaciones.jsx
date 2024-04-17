import React from "react";
import { listSegundo } from "../utils/datosSegundo";

const Modificaciones = () => {
  return (
    <div className="politica-container">
      <div className="politica-container_children">
        <div className="pb-8">
          <h2 className=" title-secundary  pb-4">
            Modificaciones del presente Acuerdo
          </h2>
          <p className="text-parrafo pb-4">
            Si nuestras prácticas de tratamiento de datos cambian,
            actualizaremos esta Política de Privacidad en consecuencia para
            informarle de ellas por adelantado y darle la posibilidad de dar su
            consentimiento, oponerse a un tratamiento concreto o emprender
            cualquier otra acción a la que tenga derecho en virtud de la
            normativa aplicable. Por favor, manténgase al tanto de cualquier
            cambio que podamos introducir en esta Política de Privacidad. Su
            acceso y uso continuo en la Interfaz constituyen su conocimiento de
            todas las modificaciones introducidas en esta Política de Privacidad
            a partir de la fecha de su acceso y uso de la Interfaz. Por lo
            tanto, le recomendamos que revise periódicamente esta Política de
            Privacidad, ya que quedará vinculado por ella. Si, por algún motivo,
            no está satisfecho con nuestras prácticas de tratamiento de datos
            personales, su recurso inmediato es dejar de utilizar la Interfaz.
            No tiene que informarnos de esta decisión a menos que pretenda
            ejercer algunos de los derechos de protección de datos estipulados
            en Ley de Protección de Datos Personales o Ley 1581 de 2012 y
            definidos más adelante en esta Política de Privacidad.
          </p>
        </div>
        <div>
          <h2 className=" title-secundary text-4xl font-bold pb-4">
            Admisibilidad
          </h2>
          <div className="pb-4">
            <h3 className="text-parrafo font-bold">Edad</h3>
            <p className="text-parrafo">
              Al acceder a la Interfaz y utilizarla, usted declara y garantiza
              que tiene al menos dieciocho (18) años de edad. Si es menor de
              dieciocho (18) años, no podrá, bajo ninguna circunstancia ni por
              ningún motivo o razón, utilizar la Interfaz. Le rogamos que nos
              informe de cualquier caso de uso de la Interfaz por parte de
              menores de 18 años, si llega a su conocimiento.
            </p>
          </div>{" "}
          <div className="pb-4">
            <h3 className="text-parrafo font-bold">Aplicabilidad</h3>
            <p className="text-parrafo">
              Esta Política de Privacidad se aplica a todas sus interacciones
              con nosotros a través de la Interfaz y a sus interacciones con
              nosotros en relación con la misma.
            </p>
          </div>
          <p className="pb-4 text-parrafo">
            A continuación se indican las categorías de nuestros procesadores
            utilizados en la Interfaz debido a una hoja de ruta interna de
            procesamiento de datos que proporciona una breve comprensión de
            nuestras actividades de procesamiento de datos con respecto a cada
            pieza de los Datos Personales que podemos recopilar a través de la
            Interfaz, así como su lugar en cada evento de procesamiento de
            datos. Puede solicitarla en <a href="mailto:ayuda@pulsodex.com.co">ayuda@pulsodex.com.co</a> A continuación se
            indican las categorías de nuestros procesadores que pueden acceder y
            procesar sus Datos Personales a través de la Interfaz:
          </p>{" "}
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listSegundo.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modificaciones;
