import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function HowItWorks({setShowModal2}) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Personaliza este valor según tus necesidades
    triggerOnce: true, // Para que la animación se dispare una sola vez
  });
  return (
    <div ref={ref} className="overflow-x-hidden shadow-xl bg-white md:p-8">
      <div className="inicio flex flex-col md:flex-row w-screen h-[1050px] md:h-[700px] overflow-hidden left-0 bg-white">
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center relative">
          <div className="relative">
            <Image
              src="/mujer.png"
              alt="logo"
              width={500}
              height={500}
              className="rounded-[10%] md:w-[450px] w-[310px] md:h-[600px] h-[400px]"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col pl-4 md:pl-0">
          <div className="h-[40%]">
            <div className="md:w-[80%] ">
              <p className="flex flex-col justify-center items-center">
                <span className="md:p-4 text-4xl md:text-6xl font-semibold">
                  ¿Cómo funciona?
                </span>
                <span className=" text-texto text-base md:text-2xl m-5 md:m-0">
                  Pulso Dex es un Ecommerce Automatizado con IA, otorgando una experiencia
                  fluida en todos los puntos de contacto con el cliente.
                </span>
              </p>
            </div>
          </div>
          <div className="h-[40%] ">
            <div className=" flex flex-col gap-2 md:gap-2">
              <div
                className={`p-4 w-32 md:w-40 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${
                  inView
                    ? "animate-fade-down animate-duration-1000 animate-delay-[100ms] animate-normal"
                    : "hidden"
                }`}
              >
                <h1 className="overflow-hidden">1. Registro</h1>
              </div>
              <div
                className={`p-4 w-36 md:w-60 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${
                  inView
                    ? "animate-fade-down animate-duration-1000 animate-delay-[400ms] animate-normal"
                    : "hidden"
                }`}
              >
                <h1 className="overflow-hidden">2. importación</h1>
              </div>
              <div
                className={`p-4 w-52 md:w-72 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${
                  inView
                    ? "animate-fade-down animate-duration-1000 animate-delay-[700ms] animate-normal"
                    : "hidden"
                }`}
              >
                <h1 className="overflow-hidden">3. Proyección en ventas</h1>
              </div>
              <div
                className={`p-4 w-64 md:w-96 font-semibold md:text-xl text-sm text-white rounded-3xl bg-azulInicio ${
                  inView
                    ? "animate-fade-down animate-duration-1000 animate-delay-[1000ms] animate-normal"
                    : "hidden"
                }`}
              >
                <h1 className="overflow-hidden">
                  4. Control en la interfaz de Pulso
                </h1>
              </div>
            </div>
          </div>
          <div className="h-[20%] w-full flex justify-start md:items-start items-center">

            <button
              onClick={() => setShowModal2()}
              className="bg-black rounded-lg font-bold text-white p-2 hover:bg-verdeButtom hover:text-black w-60 h-12 md:w-96 md:h-20 text-xs md:text-xl rounded-l-full rounded-r-full"
              >
              Más Información sobre la Franquicia
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
