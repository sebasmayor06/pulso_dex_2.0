import React from "react";

export const Cookies = () => {
  return (
    <div className="politica-container">
      <div className="politica-container_children">
        <h2 className=" title-secundary text-4xl font-bold pb-4">
          Cookies y datos recogidos automáticamente
        </h2>
        <div className="pb-8">
          <p>
            Mientras navega e interactúa con nuestra Interfaz, podemos pedirle
            su consentimiento para utilizar cookies, que son pequeños archivos
            ubicados en el disco duro/navegador de su ordenador o dispositivo
            móvil, y balizas web, que son pequeños archivos electrónicos
            ubicados en páginas de la Interfaz, para recopilar cierta
            información sobre los dispositivos que utiliza, las acciones de
            navegación y los patrones.
          </p>
          <p>
            Los datos recogidos automáticamente de cookies y balizas web pueden
            incluir información sobre su navegador web (como el tipo de
            navegador y el idioma del navegador) y detalles de sus visitas a la
            Interfaz, incluidos datos de tráfico, datos de localización y
            registros, páginas vistas, duración de la visita y rutas de
            navegación por el sitio web, así como información sobre su
            dispositivo y conexión a Internet, incluida su dirección IP y cómo
            interactúa con la Interfaz. Recogemos estos datos para ayudarnos a
            mejorar la interfaz y la interacción con ella.
          </p>
          <p>
            La información que recopilamos automáticamente también puede incluir
            información estadística y de rendimiento derivada de su uso de la
            Interfaz. Este tipo de datos sólo serán utilizados por nosotros.
          </p>
          <p>
            Puede optar por desactivar las cookies a través de las opciones
            individuales de su navegador. Para obtener información más detallada
            sobre la gestión de cookies con navegadores web específicos,
            consúltala en los sitios web respectivos de los navegadores:
          </p>
        </div>
        <ul  className="pb-8 list-disc ml-8">
          <li>Para el navegador Google Chrome;</li>
          <li>Para el navegador Firefox;</li>
          <li>Para el navegador Safari;</li>
          <li>Para el navegador Internet Explorer.</li>
        </ul>
      </div>
    </div>
  );
};
