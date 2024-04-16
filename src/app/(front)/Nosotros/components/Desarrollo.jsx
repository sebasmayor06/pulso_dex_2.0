import Image from "next/image";

const Desarrollo = ({ setShowModal2 }) => {
  return (
    <div className="md:h-screen flex flex-col gap-10 items-center justify-center py-20">
      <h1 className="title-secundary text-center px-4 ">
        Desarrollo sostenible y tecnología
      </h1>
      <div className="bg-[#B9E6FF] md:rounded-[50px] md:max-w-5xl xs:mx-6 mx-4  rounded-xl">
        <div className="md:p-12 xs:mx-8 xs:my-12 mx-4 my-6  flex flex-col  md:flex-row-reverse gap-10 items-center  ">
          <div>
            <p className="text-[#3a3a3a] xs:text-lg  md:text-xl  mb-8">
              Pulso Dex promueve el crecimiento económico, la equidad social y
              la preservación ambiental. Utilizamos IA para optimizar procesos,
              reducir el desperdicio y mejorar la experiencia del usuario.
              También fomentamos prácticas responsables, como la transparencia
              en la cadena de suministro y el uso de materiales sostenibles.
            </p>
            <button
              className="border-2 border-black  backdrop:blur bg-white xs:text-lg 
                    md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 
                    hover:bg-opacity-50 w-40 h-14 md:w-64 md:h-20 "
              // onClick={() => setShowModal2()}
            >
              Aprende Más
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
          {/* <button
              className="border-2 border-black  backdrop:blur bg-white text-sm 
                    md:text-xl font-bold md:p-3 rounded-full hover:bg-gray-400 
                    hover:bg-opacity-50 w-44 h-16 md:w-64 md:h-20 md:hidden block"
              onClick={() => setShowModal2()}
            >
              Agendar Una Demo
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Desarrollo;
