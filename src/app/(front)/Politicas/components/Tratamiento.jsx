import React from "react";
import { listTercero_uno, listTercero_dos, listTercero_tres, listTercero_cuarto, listTercero_quinto } from "../utils/listTercero";

const Tratamiento = () => {
  return (
    <div className="politica-container">
      <div className="politica-container_children">
        <h2 className=" title-secundary  pb-4">
          Tratamiento de datos en relación con la interfaz
        </h2>
        <div className="pb-16">
          <h3 className="text-parrafo font-bold">Tipos de datos recogidos</h3>
          <p className="text-parrafo">
            En la medida de lo posible, Interface
            intenta recopilar el mínimo de datos personales de usted. Datos
            personales que recogemos:
          </p>
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listTercero_uno.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <p className="text-parrafo">
            Pulso Dex o nosotros también podemos contratar plataformas
            publicitarias de terceros que se activan únicamente cuando sus
            características técnicas (los denominados píxeles) están
            habilitadas a través de la Interfaz. Las plataformas publicitarias
            de terceros mencionadas pueden recopilar datos personales de los
            visitantes de la interfaz únicamente con el fin de optimizar sus
            posibilidades publicitarias a través de sus plataformas, dirigir sus
            anuncios y, posiblemente, compartir sus datos con otras plataformas
            y agencias publicitarias para su uso posterior.
          </p>
          <p className="text-parrafo">
            En ningún caso le vamos a pedir que comparta sus claves privadas.
            Nunca confíes en nadie, ni en ningún sitio web que te pida que
            introduzcas tus claves privadas.
          </p>
        </div>
        <div>
          <h3 className="text-parrafo font-bold pb-8"> Cómo y por qué utilizamos sus datos personales</h3>
          <p className="text-parrafo pb-4">
            Podemos utilizar sus Datos Personales enumerados anteriormente sólo
            para:
          </p>
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listTercero_dos.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <p className="text-parrafo clear-start pb-4">
            Para aclarar cualquier duda, podemos utilizar los Datos Personales
            descritos anteriormente o cualquier otro Dato Personal:
          </p>
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listTercero_tres.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <h3 className=" text-parrafo font-bold pb-8">Divulgación de datos </h3>
          <p className="text-parrafo">
            Como continuación de las bases legales para la recogida y el
            tratamiento de los Datos Personales, podemos revelar cualquier Dato
            Personal sobre usted:
          </p>
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listTercero_cuarto.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <p className="text-parrafo ">
            Si tenemos que revelar alguno de sus Datos Personales para cumplir
            con investigaciones oficiales o procedimientos legales iniciados por
            funcionarios gubernamentales y/o encargados de hacer cumplir la ley,
            es posible que no podamos garantizar que dichos destinatarios de sus
            Datos Personales mantendrán la privacidad o seguridad de sus Datos
            Personales.
          </p>
          <h3 className=" text-parrafo py-8 font-bold">Período de conservación de los datos</h3>
          <p className="text-parrafo">
            Pulso Dex y/o nosotros conservamos los Datos Personales
            exclusivamente durante el tiempo necesario para seguir los fines
            legales aquí prescritos. Cuando ya no necesitemos los Datos
            Personales, haya expirado el plazo de prescripción para el
            almacenamiento de dichos Datos Personales, usted haya retirado su
            consentimiento o se haya opuesto a los intereses legítimos nuestros
            o de nuestros procesadores, los eliminaremos o destruiremos de forma
            segura a menos que los requisitos legales a los que nosotros,
            nuestros procesadores u otros controladores. Los datos agregados,
            que no pueden identificar directamente a un dispositivo/navegador (o
            individuo) y se utilizan con fines de elaboración de informes y
            análisis, se conservan durante el tiempo que sea comercialmente
            necesario hasta que usted se oponga al tratamiento de dichos datos o
            retire su consentimiento. En cualquier caso, borraremos los datos
            sobre el nombre y la dirección del usuario una vez transcurridos 30
            días naturales desde la fecha de pedido de los productos de Pulso
            Dex.
          </p>
          <p className="text-parrafo">
            En ocasiones, los requisitos legales nos obligan a conservar
            determinados datos, para fines específicos, durante un periodo de
            tiempo prolongado. Algunas de las razones por las que podemos
            conservar algunos datos durante periodos más largos son:
          </p>
          <ul className="pb-8 list-disc ml-8 text-parrafo">
            {listTercero_quinto.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
          <h3 className="text-parrafo font-bold pb-4">Sus preguntas</h3>
          <p className="text-parrafo">
            Puede ponerse en contacto con nosotros por correo electrónico en la
            siguiente dirección: <a href="mailto:ayuda@pulsodex.com.co">ayuda@pulsodex.com.co</a>; Utilizamos los datos que
            nos proporciona en un correo electrónico, que puede facilitarnos
            voluntariamente, únicamente con el fin de responder a su pregunta o
            contestar a su correo electrónico de la mejor manera posible.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Tratamiento;
