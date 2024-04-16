import Image from "next/image";

const Desarrollo = ({ setShowModal2 }) => {
  return (
    <div className="md:h-screen flex flex-col gap-10 items-center justify-center py-20">
      <h1 className="text-3xl text-center  md:text-6xl md:font-medium text-[#292930] ">
        Desarrollo sostenible y tecnología
      </h1>
      <div className="bg-[#B9E6FF] rounded-[50px] md:max-w-5xl">
        <div className="p-12 flex flex-col  md:flex-row-reverse gap-10 items-center  ">
          <div>
            <p className="text-[#6F6F6F]  md:text-xl  mb-8">
              Pulso Dex promueve el crecimiento económico, la equidad social y
              la preservación ambiental. Utilizamos IA para optimizar procesos,
              reducir el desperdicio y mejorar la experiencia del usuario.
              También fomentamos prácticas responsables, como la transparencia
              en la cadena de suministro y el uso de materiales sostenibles.
            </p>
            <button
              className="border-2 border-black  backdrop:blur bg-white text-sm 
                    md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 
                    hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20 hidden md:block"
              onClick={() => setShowModal2()}
            >
              Agendar Una Demo
            </button>
          </div>
          <div className="">
            <Image
              src="/perfil.png"
              alt="Imagen de desarrollo"
              width={600}
              height={600}
              className=" rounded-[12%] w-[120rem]"
            />
          </div>
          <button
              className="border-2 border-black  backdrop:blur bg-white text-sm 
                    md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 
                    hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20 md:hidden block"
              onClick={() => setShowModal2()}
            >
              Agendar Una Demo
            </button>
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
