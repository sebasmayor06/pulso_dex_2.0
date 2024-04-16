import Image from "next/image";

const RedFranquicia = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-screen md:h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center  gap-8 md:mt-24 mt-28">
          <h1 className="title-primary font-extrabold text-center  mx-2  md:max-w-7xl ">
            ¡Únete a nuestra red de franquicias y convierte tu sueño empresarial
            en realidad!
          </h1>
          <div  className="flex justify-center md:w-[50rem] md:h-[25rem]  w-[20rem] h-[20rem]">
            <Image
              src="/franquicia/perfil.png"
              alt="Imagen de desarrollo"
              width={600}
              height={600}
              className="object-cover w-full h-full rounded-[50px]"

            />
          </div>
        </div>
      </div>
      <div className="mt-12 max-w-[46.69rem] md:mx-auto ">
        <h2 className=" title-secundary md:text-4xl font-bold text-center mb-8">
          ¿Por qué una franquicia es la mejor opción?
        </h2>
        <p className="text-[#555555] text-lg mb-4 leading-relaxed mx-4">
          Nuestro objetivo es brindar transparencia y claridad sobre los
          aspectos importantes que tenemos en cuenta al iniciar en nuestro
          modelo de negocio. Pulso Dex se encarga de guiarte en todo momento
          para la implementación correcta de nuestro E-commerce con IA.
        </p>
        <ul className="mb-8 text-[#555555] font-semibold list-disc md:pl-6 pl-8 text-lg mx-4">
          <li className="mb-4">Finanzas</li>
          <li className="mb-4">Planificación a largo plazo (2 años)</li>
          <li className="mb-4">Networking y colaboración</li>
          <li className="mb-4">Capacitación y soporte</li>
          <li className="mb-4">Cumplimiento legal y regulatorio</li>
        </ul>
        <p className="mb-6 text-[#555555] text-lg mx-4">
          Según el más reciente estudio de Colfranquicias en el año 2022, el 90%
          de ellas aumentó sus ventas, cifra que fue un 7% superior a 2021.
        </p>
        <p className="mb-6 text-[#555555] text-lg mx-4"  >
          La estabilidad económica que ha experimentado Colombia en los últimos
          años ha contribuido al éxito de las franquicias. Los inversionistas
          nacionales e internacionales tienen más confianza en invertir en
          franquicias cuando el entorno económico es estable.
        </p>
        <p className="mb-8 text-[#555555] text-lg mx-4">
          Pulso Dex tiene como base la siguiente estructura de franquicias:
        </p>
        <ul className="list-decimal text-[#555555] pl-6 text-lg mx-4">
          <li className="mb-4">
            {" "}
            <span className="font-semibold">Franquicia de comercio:</span> Esta
            clasificación se refiere a la venta de los productos físicos que
            tenemos en el catálogo que importamos.
          </li>
          <li>
            {" "}
            <span className="font-semibold">Franquicia de servicios:</span> Esta
            clasificación se refiere al servicio tecnológico que estamos
            ofreciendo.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RedFranquicia;
